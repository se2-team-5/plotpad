const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Yo, Plotpad exists!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// tested by evan
// kate was here B)
// will was here
// andrew was here >:^]
// isa was here :))