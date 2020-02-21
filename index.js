const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>
{
    res.json({message: 'running'});
})

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));