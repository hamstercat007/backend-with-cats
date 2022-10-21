import { query } from "../index.js"
import { cats } from "../../libs/data.js"

async function populateTable() {
    for (let i = 0; i < cats.length; i++) {
        const result = await query(`INSERT INTO cats (
            name,
            human,
            hobby
        ) VALUES ($1, $2, $3) RETURNING *;`,
            [cats[i].name, cats[i].human, cats[i].hobby]
        )
        console.log(result.rows)
    }
}

populateTable()