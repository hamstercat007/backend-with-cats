import { query } from "../index.js"

const sqlString = `DROP TABLE IF EXISTS cats`

async function dropTable() {
    const result = await query(sqlString)
    console.log(result.command)
}

dropTable()