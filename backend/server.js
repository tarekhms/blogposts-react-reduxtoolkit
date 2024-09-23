import express from 'express';

const port = process.env.PORT;
const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server started on port ${port}`));
