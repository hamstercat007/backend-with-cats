import { query } from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS cats (
    id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(20) NOT NULL,
    human VARCHAR(20) NOT NULL,
    hobby VARCHAR(20) NOT NULL
)`

async function createTable() {
    const result = await query(sqlString)
    console.log(result.command)
}

createTable()
