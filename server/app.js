import express from 'express';
import pkg from 'pg';
import path from 'path';
import 'dotenv/config';

const { Pool } = pkg;
const connectionString = process.env.PG_DATABASE_URL

console.log('connectionString: ', connectionString)
const psql = new Pool({
   connectionString,
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