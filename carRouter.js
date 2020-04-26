const express = require("express");
const db = require("./db-config");

const router = express.Router();

router.get("/", (req, res) => {
    db("cars")
    .then(cars => {
        res.json(cars);
    })
    .catch(error => {
        res.status(500).json({Messgae: "Cannot find cars"});
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params;
    db("cars")
    .where({id})
    .first()
    .then(car => {
        res.json(car);
    })
    .catch(error => {
        res.status(500).json({Messgae: "Cannot get car"});
    })
})

router.post("/", (req, res) => {
    const newCar = req.body;
    db("cars")
    .insert(newCar, "id")
    .then(ids => {
        db("cars")
        .where({ id: ids[0]})
        .then(newCarEntry => {
            res.status(200).json(newCarEntry);
        })
    })
    .catch(error => {
        console.log("Error", error);
        res.status(500).json({ Message: "Cannot add car"});
    })
})

module.exports = router;