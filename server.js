const app = require('./index');

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log('Application has been started');
});

app.get('/', (req, res) => {
    res.sendfile(__dirname + '/index.html');
});
