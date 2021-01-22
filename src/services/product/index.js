const router = require("express").Router();
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../../cloudinary");
const db = require("../../utils/db");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "test",
  },
});

const cloudinaryMulter = multer({ storage: storage });

router.post(
  "/",
  cloudinaryMulter.single("imageUrl"),
  async (req, res, next) => {
    try {
      const { name, description, brand, price, imageUrl, category } = req.body;
      const query = `INSERT INTO  product 
      (name,description,brand,price,imageUrl,category) 
      VALUES ('${name}','${description}','${brand}','${price}',
      '${req.file.path}','${category}');`;

      console.log(req.body);

      const result = await db.query(query);
      res.send(result);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }
);
router.get("/", async (req, res, next) => {
  try {
    const { rows } = await db.query("SELECT * FROM product;");
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM product WHERE id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, lastName, country } = req.body;

    const id = parseInt(req.params.id);

    const query = `UPDATE product SET name='${name}', description='${description}', brand='${brand}' WHERE id=${id}`;

    const result = await db.query(query);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await db.query(
      `DELETE FROM product WHERE id=${parseInt(req.params.id, 10)}`
    );
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
