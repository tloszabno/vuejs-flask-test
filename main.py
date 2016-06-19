#!/usr/bin/env python

import flask
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/node_modules/<path:path>')
def send_node_modules(path):
    return send_from_directory('node_modules', path)

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route("/priorities")
def get_piorities():
	obj = {
		'priorities': ["A","B","C"]
	}
	return flask.jsonify(obj)

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8080, debug=True)
