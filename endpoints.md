GET
====
- To get all of the 100 most recent questions, request:

```
http://url/polls_cron/
```

- To get all of the 100 most voted on (top voted) questions, request:

```
http://url/polls_top/
```

- Both will return in this format

```
[{
"option1votes": #,
"topscore": #,
"option2": str,
"created_at": str(ISO datetime),
"question": str,
"id": str (long unique id),
"option2votes": #,
"option1": str
},...{...},...{...}]
```


- To get a specific question:

```
http://url/poll/<poll_id>
```

- Which will return:

```
{
"option1votes": #,
"topscore": #,
"option2": str,
"created_at": str(ISO datetime),
"question": str,
"id": str (long unique id),
"option2votes": #,
"option1": str
}
```

POST
====
- Request with:

```
http://url/polls/
```

- Giving the inserting data in the JSON format:

```
{
"question": str,
"option1": str,
"option2": str
}
```

  + Note that everything else will be created dyamically

PUT
===

- Request with:

```
http://url/poll/<poll_id>
```

- Please provide the following in JSON format:

- Giving the inserting data in the JSON format:

```
{
"id": #,
"option1votes": #
"option2votes": #
}
```

  + Note that option1votes and option2 votes should be updated to new values
  + The topscore will be updated serverside


To Share
=========
- Please share a URL to the question in the following format:

```
http://url/<poll_id>
```


