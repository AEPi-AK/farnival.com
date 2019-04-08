import os

from flask import Flask


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
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

    # a simple page that says hello
    @app.route('/hello')
    def hello():
        return 'Hello, World!'

    @app.route('/votes')
    def votes():
        d = db.get_db()
        query = d.execute('SELECT farnam, subra FROM VOTES;').fetchone()
        if query is not None:
            return "{farnam: " + str(query["farnam"]) + ", subra: " + str(
                query["subra"]) + "}"
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

    return app


if __name__ == '__main__':
    create_app()
