import datetime
from Simpoll import db

class Poll(db.Document):
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    question = db.StringField(max_length=255, required=True)
    option1 = db.StringField(max_length=255, required=True)
    option2 = db.StringField(max_length=255, required=True)
    option1votes = db.IntField(default=0, required=True)
    option2votes = db.IntField(default=0, required=True)
    topscore = db.IntField(default=0, required=True)

    def get_absolute_url(self):
        # it's okay to use the first 7 bytes for url
        # because first 4 bytes are time and next 3 are
        # a machine id
        return self._id[0:6]

    def __unicode__(self):
        return self.question

    meta = {
        'allow_inheritance': True,
        'indexes': ['-created_at'],
        'ordering': ['-created_at']
    }