import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Node Typescript Template');
});

app.listen(port, () => console.log(`Server is listening @ http://localhost:${port}`));
