import datetime
from flask import url_for
from Simpoll import db


class Poll(db.Document):
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    question = db.StringField(max_length=255, required=True)
    option1 = db.StringField(max_length=255, required=True)
    option2 = db.StringField(max_length=255, required=True)
    option1upvotes = db.IntField(required=True)
    option1downvotes = db.IntField(required=True)
    option2upvotes = db.IntField(required=True)
    option2downvotes = db.IntField(required=True)


    def get_absolute_url(self):
        # it's okay to use the first 7 bytes for url
        # because first 4 bytes are time and next 3 are
        # a machine id
        return url_for('post', kwargs={"slug": self._id[0:6]})

    def __unicode__(self):
        return self.question

    meta = {
        'allow_inheritance': True,
        'indexes': ['-created_at', 'slug'],
        'ordering': ['-created_at']
    }