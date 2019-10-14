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
