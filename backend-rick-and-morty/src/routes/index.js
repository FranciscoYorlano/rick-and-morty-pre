const { Router } = require("express");

const getCharById = require("../controllers/getCharById");
const getChatDetail = require("../controllers/getChatDetail");

let favs = require("../utils/favs");

const router = Router();

router.get("/search/:id", getCharById);

router.get("/detail/:id", getChatDetail);

router.post("/rickandmorty/fav", (req, res) => {
    favs.push(req.body);
    res.status(200).json({ status: "Post Fav Ok" });
});

router.get("/rickandmorty/fav", (req, res) => {
    res.status(200).json(favs);
});

router.delete("/rickandmorty/fav/:id", (req, res) => {
    favs = favs.filter((fav) => fav.id !== Number(req.params.id));
    res.status(200).json({ status: "Delete Fav Ok" });
});

module.exports = router;
