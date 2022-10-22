import express from "express";
import mongoose from "mongoose";
import * as HeroController from "./Controller/HeroControler.js";
import { heroCreateValidator } from "./Validations/Hero_validation.js";
import multer from "multer";
import cors from "cors";
const port = 3013;
const dbUrl =
  "mongodb+srv://artful:789456@marvelcluster.04sh9js.mongodb.net/marvels?retryWrites=true&w=majority";

const app = express();

app.use(cors());

app.use("/img_hero_uploads", express.static("img_hero_uploads"));

mongoose
  .connect(dbUrl)
  .then(() => console.log("DB Coonect Ok"))
  .catch((err) => console.log("Error connect db"));

const imgHeroStorage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "img_hero_uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadImg = multer({ storage: imgHeroStorage });

app.use(express.json());

app.get("/api/heroes", HeroController.getAllHero);

app.get("/api/heroes/:id", HeroController.getOneHero);
app.post("/api/heroes/", heroCreateValidator, HeroController.createOneHero);
app.patch("/api/heroes/:id", heroCreateValidator, HeroController.updateOneHero);
app.delete("/api/heroes/:id", HeroController.deleteOneHero);

app.post("/upload", uploadImg.single("image"), (req, res) => {
  res.json({
    url_hero: `/img_hero_uploads/${req.file.originalname}`,
  });
});
// app.delete("/api/heroes", heroCreateValidator, HeroController.createHero);
// app.update("/api/heroes", heroCreateValidator, HeroController.createHero);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server work");
});
