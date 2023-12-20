import express from 'express';
import pkg from 'pg';
import path from 'path';

const { Pool } = pkg;

const psql = new Pool({
    host: 'localhost',
    user: 'rob',
    password: 'password',
    database: 'autoinfo',
});

const app = express();
const expressPort = 8000;
app.use(express.static('../public'))

app.get('/api/owners', (req, res, next) => {
    psql.query('SELECT * FROM owners', (err, result) => {
        if (err) {
            console.error(err);
            next(err);
            return;
        }
        res.send(result.rows);
    });
});

app.listen(expressPort, () => {
    console.log(`Listening on port: `, expressPort );
});