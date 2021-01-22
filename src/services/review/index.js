const router = require("express").Router();

const db = require("../../utils/db");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM review;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM review WHERE id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { comment, rate, productId } = req.body;
    const query = `INSERT INTO  review (comment, rate, productId) VALUES ('${comment}','${rate}','${productId}');`;
    const result = await db.query(query);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { comment, rate, productId } = req.body;

    const id = parseInt(req.params.id);

    const query = `UPDATE review SET comment='${comment}', rate='${rate}', productId='${productId}' WHERE id=${id}`;

    const result = await db.query(query);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `DELETE FROM review WHERE id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
