#Discollect Mail service!

##End points

###/api/messageQueue
Send post to send email to designated recipient
####SAMPLE:
POST request:
/api/messageQueue

Request body:
{
    "giverEmail": "giver@email.com",
    "giverUsername": "giver username",
    "takerEmail": "taker@email.com",
    "takerUsername": "taker username",
    "itemname": "a thing"
}

Response:
"message sent to giver@email.com"
