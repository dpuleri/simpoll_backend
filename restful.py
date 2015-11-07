import json
from Simpoll.models import Poll

def get_poll(poll_id):
    poll = Poll.objects.get_or_404(_id=poll_id)
    return to_json(poll)

def get_polls_chron():
    # arbitrarily limit to 100 objects
    polls = Poll.objects.order_by('-_id').limit(100)
    return to_json_arr(polls)


def get_polls_top():
    poll = Poll.objects.order_by('-topscore').limit(100)
    return to_json_arr(polls)

# helper func to make 1 json obj
def to_json(doc):
    json_dict = {
           "id": str(doc._id),
           "created_at": doc.created_at.isoformat(),
           "question": doc.question,
           "option1": doc.option1,
           "option2": doc.option2,
           "option1votes": doc.option1votes,
           "option2votes": doc.option2votes,
           "topscore": str(doc.topscore),
    }
    return json.dumps(json_dict)

# helper function to get an array of json docs
def to_json_arr(docs):
    docs_jsons = [to_json(doc) for doc in docs]
    full_json = "[%s]" % ",\n".join(docs_jsons)
    return full_json