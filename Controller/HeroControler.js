import HeroModel from "../Models/Hero_model.js";

export const createOneHero = async (req, res) => {
  try {
    const hero = new HeroModel({
      nickname: req.body.nickname,
      real_name: req.body.real_name,
      origin_description: req.body.origin_description,
      superpowers: req.body.superpowers,
      catch_phrase: req.body.catch_phrase,
      img_hero: req.body.img_hero,
    });

    const heroAdd = await hero.save();

    res.json(hero);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to add hero" });
  }
};

export const getAllHero = async (req, res) => {
  try {
    const AllHero = await HeroModel.find();

    res.json(AllHero);
  } catch (error) {
    res.status(500).json({
      message: "Not gets heroes",
    });
  }
};

export const getOneHero = async (req, res) => {
  try {
    const heroId = req.params.id;

    const AllHero = await HeroModel.findOne({ _id: heroId });

    res.json(AllHero);
  } catch (error) {
    res.status(500).json({
      message: "Not find hero",
    });
  }
};

export const deleteOneHero = async (req, res) => {
  try {
    const heroId = req.params.id;

    const AllHero = await HeroModel.deleteOne({ _id: heroId });

    res.json({ message: "Hero was remove" });
  } catch (error) {
    res.status(500).json({
      message: "Hero wasn't delete",
    });
  }
};

export const updateOneHero = async (req, res) => {
  try {
    const heroId = req.params.id;

    const AllHero = await HeroModel.findOneAndUpdate(
      { _id: heroId },
      {
        nickname: req.body.nickname,
        real_name: req.body.real_name,
        origin_description: req.body.origin_description,
        superpowers: req.body.superpowers,
        catch_phrase: req.body.catch_phrase,
        img_hero: req.body.img_hero,
      }
    );
    res.json({
      message: "Hero was Update",
    });
  } catch (error) {
    res.status(500).json({
      message: "Hero wasn't update",
    });
  }
};
