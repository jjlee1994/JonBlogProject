from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return {'msg': 'From one to America, how free are you tonight? Henry ;)'}, 200


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0",port=5001)