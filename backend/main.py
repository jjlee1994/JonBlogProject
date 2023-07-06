from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from datetime import datetime

db = SQLAlchemy()
app = Flask(__name__)
bcrypt = Bcrypt(app)
# configure the SQLite database, relative to the app instance folder
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:postgres@blog_project_db:5432/database"
app.config["JWT_SECRET_KEY"] = "aaaaaaa"
jwt = JWTManager(app)
# initialize the app with the extension
db.init_app(app)
migrate = Migrate(app, db)

@app.route('/', methods=['POST'])
def hello_world():
    print(request.get_json())
    data = request.get_json()
    print(data['hello'])
    return {'msg': 'From one to America, how free are you tonight? Henry ;)'}, 200

@app.route('/signup', methods=['POST'])
def signup():
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
    data = request.get_json()
    profile = Profile(email=data['email'], username=data['username'], password=data['password'])
    db.session.add(profile)
    db.session.commit()
    return {'msg': 'successful signup'}, 200

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
    data = request.get_json()
    pw_hash = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    profileLookup = Profile.query.filter_by(username=data['username']).first()
    if not profileLookup:
        return {'msg': 'user not found'}, 400
    
    if bcrypt.check_password_hash(profileLookup.password, data['password']):
        access_token = create_access_token(identity=profileLookup.username)
        return jsonify(access_token=access_token)
    else:
        return {'msg': 'user not found'}, 400


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
    data = request.get_json()
    if data['subject'].strip() == '':
        return {'msg': 'subject cannot be empty'}, 400
    if data['content'].strip() == '':
        return {'msg': 'content cannot be empty'}, 400
    postData = Post(subject=data['subject'], content=data['content'], ownerId=data['ownerId'])
    db.session.add(postData)
    db.session.commit()
    return {'msg': 'post created'}, 200

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

class Profile(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String)
    password = db.Column(db.String)
    posts = db.relationship('Post', backref='profile', lazy=True)

    def __init__(self, email, username, password):
        self.email = email
        self.username = username
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

class Post(db.Model):

    post_id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    time = db.Column(db.DateTime, nullable=False)
    owner = db.Column(db.Integer, db.ForeignKey('profile.id'), nullable=False)

    def __init__(self, subject, content, ownerId):
        self.subject = subject
        self.content = content
        self.time = datetime.now()
        self.owner = ownerId

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