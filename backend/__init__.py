import os

from flask import Flask
from flask_cors import CORS
from flask import json
from flask import send_file
from flask import request

from os import listdir
import random

from memegenerator import make_meme

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    from . import db
    db.init_app(app)


    @app.route('/votes')
    def votes():
        d = db.get_db()
        query = d.execute('SELECT farnam, subra FROM VOTES;').fetchone()
        if query is not None:
            return json.dumps({"farnam":query["farnam"],"subra":query["subra"]})
            # return "{'farnam': " + str(query["farnam"]) + ", 'subra': " + str(
            # query["subra"]) + "}"
        else:
            return "{farnam: -1, subra: -1}"

    @app.route('/vote_farnam', methods=('POST', ))
    def vote_farnam():
        d = db.get_db()
        val = d.execute('UPDATE votes SET farnam = farnam + 1;')
        d.commit()
        return votes()

    @app.route('/vote_subra', methods=('POST', ))
    def vote_subra():
        d = db.get_db()
        val = d.execute('UPDATE votes SET subra = subra + 1;')
        d.commit()
        return votes()

    @app.route('/meme')
    def meme():
        photos_directory = "backend/farnam/"
        captions_file = "backend/captions.txt"

        photos = listdir(photos_directory)
        captions = open(captions_file,"r").read().split('\n')

        photo = photos_directory+random.choice(photos)
        caption = random.choice(captions)
        cap_split = str.split(caption)
        top_caption = " ".join(cap_split[0:(int)(len(cap_split)/2)])
        bottom_caption = " ".join(cap_split[(int)(len(cap_split)/2):])
        make_meme(top_caption,bottom_caption,photo)
        r = send_file("../temp.png")
        r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        r.headers["Pragma"] = "no-cache"
        r.headers["Expires"] = "0"
        r.headers['Cache-Control'] = 'public, max-age=0'
        return r

    @app.route('/auth',methods=('POST',))
    def auth():
        password = "AEPi Rocks"
        if request.json["code"] == password:
            return json.dumps({"auth":True})
        else:
            return json.dumps({"auth":False})

    return app


