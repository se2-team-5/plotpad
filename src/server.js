const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.port || 3000;

// Setting up handlebars
app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
app.set('view engine', '.hbs');
app.set('views', './views');

// This static file stuff confuses me - Andrew
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

// 404 error page - page not found
app.use((req, res, next) => {
    res.status(404).render('404', { title: '404' });
});

// 500 error page - server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', { title: '500' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// tested by evan
// kate was here B)
// will was here
// andrew was here >:^]
// isa was here :))