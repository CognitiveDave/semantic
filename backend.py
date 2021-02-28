from flask import Flask, render_template, g, jsonify, request, redirect, url_for, session, flash
from gensim import corpora
import os

app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")

@app.route("/home")
def hello():
    return "Hello World from Flask"

@app.route('/')
def home():
    return render_template("index.html")    

port = os.getenv('PORT', '5006')
if __name__ == "__main__":
	app.run(host='0.0.0.0', port=int(port),debug=True)
    #serve(app, url_scheme='http', threads=4, port=int(port))
