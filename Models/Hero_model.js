import mongoose from "mongoose";

const HeroShema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
      unique: true,
    },

    real_name: String,
    origin_description: String,
    superpowers: {
      type: Array,
      default: [],
    },
    catch_phrase: String,
    img_hero: {
      type: String,
      required: true,
    },
  },
  {
    timeseries: true,
  }
);
HeroShema.path("nickname").index({ unique: true });
export default mongoose.model("Hero", HeroShema);
