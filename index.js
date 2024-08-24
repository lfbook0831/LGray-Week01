console.log('hello from Node.js');
let myhttp = require('http');

let myserver = myhttp.createServer(

  function(myrequest, myresponse) {
    console.log( myrequest.url );

    myresponse.writeHead(
      200,
      {
        "Content-Type": "text/html"
      }
 );
      myresponse.end(`
      <html>
        <body style="background-color: pink; font-family: 'Brush Script MT', cursive;">
          <p>greetings</p>
        </body>
      </html>
    `);
  }
);

myserver.listen(80, "0.0.0.0");