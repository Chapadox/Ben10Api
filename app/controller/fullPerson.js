import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db  = fs.readFileSync(path.join(__dirname, '../../db/db.json'))

function personangens(req, res) {
    return res.send(JSON.parse(db));
};

export default personangens;

// by Destr00