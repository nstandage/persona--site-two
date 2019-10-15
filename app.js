
require("dotenv").config();


const express = require('express')
const fs = require('fs')
const https = require('https')
const http = require('http');
const app = express()
const port = process.env.PORT || 3000;






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
//sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setApiKey('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');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path));


//app.listen(port, () => console.log(`Example app listening on port ${port}!`))

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

httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});

httpsServer.listen(443, () => {
	console.log('HTTPS Server running on port 443');
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




