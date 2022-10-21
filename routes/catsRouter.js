import express from "express";
const router = express.Router();
import {
  getAllCats,
  findCatById,
  findCatByName,
  createCat,
  deleteCatById,
} from "../models/cats.js";

router.get("/", async function (req, res) {
  if (req.query.name !== undefined) {
    const name = req.query.name;
    const result = await findCatByName(name);
    res.json({
      success: true,
      payload: result,
    });
  } else {
    const result = await getAllCats(); 
    res.json({
      success: true,
      payload: result,
    });
  }
});

router.get("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await findCatById(id);
  console.log(result);
  res.json({
    success: true,
    payload: result,
  });
});

router.post("/", async function (req, res) {
  const body = req.body;
  const result = createCat(body);
  res.status(201);
  res.json({ success: true, payload: result });
});

router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await deleteCatById(id);
  res.json({ success: true, payload: result });
});

export default router;
