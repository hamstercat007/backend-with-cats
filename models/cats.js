import { query } from "../db/index.js";
const url = "/api";

export async function getAllCats() {
  const result = await query("SELECT * FROM cats;");
  return result.rows;
}

export async function findCatById(id) {
  const { rows } = await query(`SELECT * FROM cats WHERE id = $1;`, [id]); //destructuring and taking rows property from the object - all your data and discards everything else.
  return rows[0]; //why [] - SQL handles a lot of data - so SQL always returns an array
}

export async function findCatByName(name) {
  const { rows } = await query(`SELECT * FROM cats WHERE name = $1;`, [name]);
  return rows[0];
}

export async function createCat(newCat) {
  const result = await query(
    `INSERT INTO cats (
        name, human, hobby) VALUES ($1, $2, $3) RETURNING *;`,
    [newCat.name, newCat.human, newCat.hobby]
  );
  console.log(result.rows);
  return result.rows[0]; //access inside the array, look in network tab - headers + preview
}

export async function deleteCatById(catId) {
  const id = catId;
  const result = await query(`DELETE FROM cats WHERE id = $1 RETURNING *;`, [
    id,
  ]);
  console.log(result.rows);
  return result.rows[0];
}
