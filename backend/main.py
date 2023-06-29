from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return {'msg': 'From one to America, how free are you tonight? Henry ;)'}, 200

@app.route('/signup', methods=['POST'])
def signup():
    # take in data from request, make user object from data, return back first/last name
    data = request.get_json()
    u = User(first_name=data["first_name"], last_name=data["last_name"], username=data["username"], password=data["password"])
    return {'msg': u.get_name()}, 200

@app.route('/login', methods=['POST'])
def login():
    # 200 if successful login
    # 400 if failure
    u = User(first_name="henry3", last_name="lao3", username="H", password="asdf")
    data = request.get_json()
    if data["username"] == u.username and data["password"] == u.password:
        return {'msg': "logged in"}, 200
    else:
        return {'msg': "fail"}, 400

@app.route('/createpost')
def create_post(Post):
    pass

@app.route('/jon', methods=['GET', 'POST'])
def jon():
    data = request.get_json()
    return {'sum': data['a'] + data['b']}, 200

class User:
    def __init__(self, first_name, last_name, username, password):
        self.first_name = first_name
        self.last_name = last_name
        self.username = username
        self.password = password
    
    def get_name(self):
        return self.first_name + " " + self.last_name
        

class Post:
    def __init__(self, post):
        self.content = post['content']
        self.time = post['time']
        self.subject = post['subject']
        self.post_id = post['post_id']
        self.owner = post['owner']

class Blog:
    def __init__(self):
        self.users = {}
        pass
    def create_acc(self, User):
        pass
    def logout(self, username):
        pass
    def post_blog(self, Post):
        pass
    def delete_blog(self, post_id):
        pass
if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0",port=6000)