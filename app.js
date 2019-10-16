
require("dotenv").config();


const express = require('express')
const fs = require('fs')
const https = require('https')
const http = require('http');
const app = express()
const port-http = process.env.PORT_HTTP || 80;
const port-https = process.env.PORT_HTTPS || 443






const path = "/root/personal-site-two/public/";
const home = path + 'index.html';
const myWork = path + 'my-work.html';
const pennyWise = path + 'penny-wise.html';
const testPrep = path + 'test-prep.html';
const fatCats = path + 'fat-cats.html';
const brother = path + 'brother.html';
const ns_email = 'developer@nathanstandage.com';
const sgMail = require('@sendgrid/mail');
var bodyParser = require('body-parser')
sgMail.setApiKey(process.env.EMAIL_API_KEY);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path));



const privateKey = fs.readFileSync('/etc/letsencrypt/live/nathanstandage.com/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/nathanstandage.com/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/nathanstandage.com/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};


const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(port-http, () => {
	console.log(`HTTP Server running on port ${port-http}`);
});

httpsServer.listen(port-https, () => {
	console.log(`HTTPS Server running on port ${port-https}`);
});

app.use((req, res) => {
	res.send('Hello there !');
});


app.get('/', (req, res) => {
        res.sendFile(home);
});



app.get('/my-work', (req, res) => {
        res.sendFile(myWork);
});


app.get('/penny-wise', (req, res) => {
        res.sendFile(pennyWise);
});


app.get('/test-prep', (req, res) => {
        res.sendFile(testPrep);
});



app.get('/fat-cats', (req, res) => {
        res.sendFile(fatCats);
});



app.get('/brother', (req, res) => {
        res.sendFile(brother);
});





//EMAIL STUFF




app.post('/api', (request, response) => {

const msg = {
  to: ns_email,
  from: request.body.email,
  subject: '!!Feedback from nathanstandage.com!!',
	text: `
	From: ${request.body.name}

	Email: ${request.body.email}

	Subject: ${request.body.subject}

	Message: ${request.body.body}

	`,
};
sgMail.send(msg)
	.then( response => {
		
//		console.log(response);

	});

  response.json({
    status: "Success!"
  });

});




