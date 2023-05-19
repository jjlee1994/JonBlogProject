from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
app = Flask(__name__)
# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@blog_project_db:5432/database"
# initialize the app with the extension
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/', methods=['POST'])
def hello_world():
    # print(request.get_json())
    # data = request.get_json()
    # print(data['hello'])
    print(Profile.query.all()[0].id)
    return {'msg': 'From one to America, how free are you tonight? Henry ;)'}, 200

@app.route('/signup', methods=['POST'])
def signup():
    '''
        Creates account for user and store in database if all information is correct/unique

        Requests:
            payload (JSON): {
                Profile: {
                    'email' (str): The email of the user
                    'username' (str): The username of the user
                    'password' (str): The password of the user
                }
            }

            Response:
                (201): Account successfully created
                (204): All fields must be filled in
                (400): This username already exists

    '''
    inputs = request.get_json()
    # TODO: Validate 
    newProfile = Profile(email = inputs['email'], username = inputs['username'], password = inputs['password'])
    db.session.add(newProfile)
    db.session.commit()
    return {'msg': 'new profile created'}, 201

    pass

@app.route('/login', methods=['POST'])
def login():
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
    inputs = request.get_json()
    user = Profile.query.filter_by(username = inputs['username']).first()
    if not user:
        return {'msg':'User not found'}, 404
    if user.password == inputs['password'] :
        return user.to_dict(), 200
    else :
        return {'msg': "User's name or password did not match" }, 400
    pass
# TODO: query profile with id/username

@app.route('/createpost', methods=['POST'])
def create_post():
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

#TODO: make get_post for user instead of id
@app.route('/post/<post_id>', methods=['GET'])
def get_post():
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

class Profile(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String)
    password = db.Column(db.String)
    posts = db.relationship('Post', backref='user')
    
    def to_dict(self):
        return {'id': self.id, 'username': self.username, 'email': self.email}

    # def init(self, username):
        # look into database to find username?
        # self.first_name = 
        # self.last_name = 
        # self.username = username
        # self.password = 
        # pass

class Post(db.Model):

    subject = db.Column(db.String(100),nullable=False)
    content = db.Column(db.String, nullable=False)
    time = db.Column(db.DateTime, nullable=False)
    id = db.Column(db.Integer, nullable=False, primary_key=True)
    profile_id = db.Column(db.Integer, db.ForeignKey('profile.id'))
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