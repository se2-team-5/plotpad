const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Yo, Plotpad exists!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});




// kate was here B)