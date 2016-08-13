#Discollect Mail service!

##End points

###/api/taken
Send post to send email to designated recipient
####SAMPLE:
POST request:
/api/taken

Request body:
{
    "giverEmail": "giver@email.com",
    "giverUsername": "giver username",
    "takerEmail": "taker@email.com",
    "takerUsername": "taker username",
    "itemname": "a thing"
}

Response:
"messages sent to giver@email.com and taker@email.com"

###/api/closed
Send post to send a rating reminder email to the taker
####SAMPLE:
POST request:
/api/closed

Request body:
{
    "giverUsername": "giver username",
    "takerEmail": "taker@email.com",
    "takerUsername": "taker username",
    "itemname": "a thing"
}

Response:
"message sent to giver@email.com"
