const myWork = path + 'my-work.html';
const pennyWise = path + 'penny-wise.html';
const testPrep = path + 'test-prep.html';
const fatCats = path + 'fat-cats.html';
const brother = path + 'brother.html';


app.use(express.static(path));

//app.get('/', (req, res) => res.send('Hello Worlds!'))


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

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

ns_email = 'developer@nathanstandage.com';
first_name = '';
last_name = '';
email = '';
subject = '';
body = '';




const msg = {
  to: ns_email,
  from: email,
  subject: subject + ' FROM: ' first_name + ' ' + last_name,
  text: body
};
sgMail.send(msg);



