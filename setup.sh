#!/bin/sh

# safe environment for python! assuming you've already cloned
virtualenv .
# pip dependencies
pip install flask
pip install flask-script
pip install WTForms
pip install mongoengine
pip install flask_mongoengine
pip install flask-cors