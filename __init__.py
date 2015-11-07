from flask import Flask, request, abort
from flask.ext.mongoengine import MongoEngine

app = Flask(__name__)
app.config["MONGODB_SETTINGS"] = {'DB': "simpoll_db"}
app.config["SECRET_KEY"] = "this_is_only_a_test"

db = MongoEngine(app)

def get_blueprints(app):
    import restful

get_blueprints(app)

@app.route("/")
def hello():
    return "Hello this is world"

@app.route('/<poll_id>', methods=['GET', 'PUT', 'DELETE'])
def api_one_poll(poll_id):
    if request.method == 'GET':
        # handle 404 inside function
        return restful.get_poll(poll_id)
    elif request.method == 'PUT':
        return restful.put_poll(poll_id, request)
    else:
        print 'We do not support that at this time'

@app.route('/polls/', methods=['POST'])
def api_post_polls():
    if not request.json or not 'question' in request.json:
        abort(400)
    return restful.post_poll(request), 201

@app.route('/polls_chron/', methods=['GET'])
def api_get_chron_polls():
    return restful.get_polls_chron()

@app.route('/polls_top/', methods=['GET'])
def api__get_top_polls():
    return restful.get_polls_top()

if __name__ == '__main__':
    app.run()