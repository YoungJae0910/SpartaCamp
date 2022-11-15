# from flask import Flask, render_template, request, jsonify
# from pymongo import MongoClient
# import certifi
#
# app = Flask(__name__)
# ca = certifi.where()
# client = MongoClient('mongodb+srv://test:sparta@cluster0.im2ccmy.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca)
#
#
# db = client.sparta
#
#
# @app.route('/')
# def home():
#    return render_template('index.html')
#
#
# @app.route("/homework", methods=["POST"])
# def homework_post():
#     name_receive = request.form["name_give"]
#     comment_receive = request.form["comment_give"]
#
#
#     doc = {
#         'name': name_receive,
#         'comment': comment_receive
#     }
#
#
#     db.homework.insert_one(doc)
#     return jsonify({'msg':'응원 완료!'})
# #
#
# @app.route("/homework", methods=["GET"])
# def homework_get():
#     comment_list = list(db.homework.find({},{'_id':False}))
#     return jsonify({'comments':comment_list})

    #
    # if __name__ == '__main__':
    #  app.run('0.0.0.0', port=5000, debug=True)

from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
from pymongo import MongoClient
import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://test:sparta@cluster0.wsolap1.mongodb.net/?retryWrites=true&w=majority',
                            tlsCAFile=ca)
db = client.dbsparta


@app.route('/')
def home():

    return render_template('index.html')


    @app.route("/comment", methods=["POST"])
    def project_post():

        comment_receive = request.form['comment_give']
        name_receive = request.form['name_give']

        doc = {
            'comment': comment_receive,
            'names': name_receive,
        }

        db.comments.insert_one(doc)
        return jsonify({'msg': '댓글이 작성되었습니다.'})


    @app.route("/comment", methods=["GET"])
    def project_get():
        comment_list = list(db.comments.find({}, {'_id': False}))
        return jsonify({'comments': comment_list})


    if __name__ == '__main__':
        app.run('0.0.0.0', port=5000, debug=True)






