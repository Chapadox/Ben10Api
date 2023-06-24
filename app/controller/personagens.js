import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db  = fs.readFileSync(path.join(__dirname, '../../db/db.json'))

function getbyID(id) {
    const mydb = JSON.parse(db)
    return mydb.filter(db => db.id === id)
}

function GetPersonangensById(req, res) {
    res.send(getbyID(req.params.id))
};

export default GetPersonangensById;

// by Destr00