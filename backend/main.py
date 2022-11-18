from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return {'msg': 'From one to America, how free are you tonight? Henry ;)'}, 200

@app.route('/signup')
def signup(User):
    pass

@app.route('/login')
def login(username, password):
    '''
        The login route for all current users on the system

        Requests:
            payload (JSON): {
                'username' (str): The username of the user
                'password' (str): The password of the user
            }
        
        Response:
            (200): User's authenticated
                returns {
                    'access-token' (str): The access token used by user to call additional API
                } 
            (400): User's name or password did not match
            (404): User not found
    
    '''



    pass

@app.route('/createpost')
def create_post(Post):
    pass

class User:
    def __init__(self, username):
        # self.first_name = 
        # self.last_name = 
        # self.username = username
        # self.password = 
        pass

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
    app.run(debug=True, host="0.0.0.0",port=5001)