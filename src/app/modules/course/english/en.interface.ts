import { Model } from "mongoose";

export type IEnglish = {
  id: string;
  name: string;
  data: [{ word: string; synonyms: string; antonyms: string }];
};

export type IEnglishFilters = {
  searchTerm?: string;
  id: string;
  name: string;
  data: [{ word: string; synonyms: string; antonyms: string }];
};

export type EnglishModel = Model<IEnglish, Record<string, unknown>>;
