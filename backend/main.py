from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['POST'])
def hello_world():
    print(request.get_json())
    data = request.get_json()
    print(data['hello'])
    return {'msg': 'From one to America, how free are you tonight? Henry ;)'}, 200

@app.route('/signup', methods=['POST'])
def signup(User):
    '''
        Creates account for user and store in database if all information is correct/unique

        Requests:
            payload (JSON): {
                User: {
                    'first_name' (str): The first name of the user
                    'last_name' (str): The last name of the user
                    'username' (str): The username of the user
                    'password' (str): The password of the user
                }
            }

            Response:
                (201): Account successfully created
                (204): All fields must be filled in
                (400): This username already exists

    '''
    pass

@app.route('/login', methods=['POST'])
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

@app.route('/createpost', methods=['POST'])
def create_post(Post):
    '''
        This route creates new post for the user

        Requests:
            payload (JSON):
                Post: {
                    'subject' (str): The subject line of the blog post
                    'content' (str): The contents of the blog post
                    'time'    (date and time): The time of create of the blog post
                    'post_id' (int): The unique idenifier of the blog post
                    'owner'   (str): The username of the owner of this post
                }
        Response:
            (201): Blog post created
            (400): Not all content is filled
    '''
    pass

@app.route('/post/<post_id>', methods=['GET'])
def get_post(post_id):
    '''
        Retrieve the requested post based on post id

        Requests:
            payload (JSON): 
            {
                "post_id" (int): The id of the specific post to retrieve
            }
        Response:
            (200): Returns the content of the requested Post
                Post: {
                    'subject' (str): The subject line of the blog post
                    'content' (str): The contents of the blog post
                    'time'    (date and time): The time of create of the blog post
                    'post_id' (int): The unique idenifier of the blog post
                    'owner'   (str): The username of the owner of this post
                }
            (404): Post with post_id cannot be found
    '''
    pass

class User:
    def __init__(self, username):
        # look into database to find username?
        # self.first_name = 
        # self.last_name = 
        # self.username = username
        # self.password = 
        pass

class Post:
    def __init__(self, post):
        self.subject = post['subject']
        self.content = post['content']
        self.time = post['time']
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