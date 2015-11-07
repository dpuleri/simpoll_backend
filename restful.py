import json
from simpoll_backend.models import Poll

def get_poll(poll_id):
    # for some reason mongoengine uses id instead of _id..
    poll = Poll.objects.get_or_404(id=poll_id)
    return to_json(poll)

def get_polls_chron():
    # arbitrarily limit to 100 objects
    polls = Poll.objects.all().order_by('-id').limit(100)
    return to_json_arr(polls)


def get_polls_top():
    poll = Poll.objects.order_by('-topscore').limit(100)
    return to_json_arr(polls)

def put_poll(poll_id, request):
    new_poll_dict = request.json
    poll = Poll.objects.get_or_404(id=request.json['id'])
    poll['option1votes'] = int(request.json['option1votes'])
    poll['option2votes'] = int(request.json['option2votes'])
    poll['topscore'] = poll['option1votes'] + poll['option2votes']
    poll.save()
    return to_json(poll)

def post_poll(request):
    # new_poll_dict = json.loads(request.json)
    new_poll_dict = request.json
    new_poll = Poll(question=new_poll_dict['question'],
                    option1=new_poll_dict['option1'],
                    option2=new_poll_dict['option2'])
    new_poll.save()
    return to_json(new_poll)

# helper func to make 1 json obj
def to_json(doc):
    json_dict = {
           "id": str(doc.id),
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