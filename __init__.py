from flask import Flask
from flask.ext.mongoengine import MongoEngine
from Simpoll import restful

app = Flask(__name__)
app.config["MONGODB_SETTINGS"] = {'DB': "simpoll_db"}
app.config["SECRET_KEY"] = "this_is_only_a_test"

db = MongoEngine(app)

@app.route("/")
def hello():
    return "Hello this is world"

@app.route('/<poll_id>', methods=['GET'])
def api_poll(poll_id):
    return restful.get_poll(poll_id)

@app.route('/polls', methods=['GET'])
def api_polls():
    return restful.get_polls()

if __name__ == '__main__':
    app.run()