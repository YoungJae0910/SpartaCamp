from pymongo import MongoClient
import certifi

ca = certifi.where()
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.im2ccmy.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
all_users = list(db.users.find({},{'_id':False}))

# 바꾸기 - 예시
c

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})