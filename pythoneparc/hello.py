import requests
from bs4 import BeautifulSoup

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.naver?sel=pnt&date=20210829',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://test:sparta@cluster0.im2ccmy.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

music = soup.select('body-content > div.newest-list > div > table > tbody > tr')
for music in music:
    a = music.select_one('td.info > a.title.ellipsis')
    if a is not None:
        title = a.text
        rank = music.select_one('td.number')['alt']
        singer = music.select_one('td.info > a.artist.ellipsis').text
        doc = {
            'title':title,
            'rank':rank,
            'singer':singer
        }
        print(title)
        # db.movies.insert_one(doc)

        #t순위
        # body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.number
        #노래
        # body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.info > a.title.ellipsis
        #가수
        # body-content > div.newest-list > div > table > tbody > tr:nth-child(1) > td.info > a.artist.ellipsis