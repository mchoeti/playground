
Hab ich heute mal gefunden


- function(res) is called when the connection is established
- on('data') is called when there's a chunk of data (this almost certainly will be more than once)
- on('close') is called when the connection closes.

http://forum.espruino.com/conversations/1364/
