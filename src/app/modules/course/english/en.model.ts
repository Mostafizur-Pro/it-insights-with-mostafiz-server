import { Schema, model } from "mongoose";
import { EnglishModel, IEnglish } from "./en.interface";

const englishSchema = new Schema<IEnglish>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  data: {
    word: {
      type: String,
      required: true,
    },
    bangla: {
      type: String,
      required: true,
    },
    synonyms: {
      type: String,
      required: true,
    },
    antonyms: {
      type: String,
      required: true,
    },
  },
});

export const English = model<IEnglish, EnglishModel>("English", englishSchema);
