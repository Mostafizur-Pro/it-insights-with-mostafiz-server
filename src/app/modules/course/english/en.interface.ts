import { Model } from "mongoose";

export type IEnglish = {
  id: string;
  name: string;
  data: [
    {
      word: string;
      bangla?: string | undefined;
      synonyms: string;
      antonyms: string;
    }
  ];
};

export type IEnglishFilters = {
  searchTerm?: string;
  id?: string;
  name?: string;
  data?: [
    {
      word?: string;
      bangla?: string | undefined;
      synonyms?: string;
      antonyms?: string;
    }
  ];
};

export type EnglishModel = Model<IEnglish, Record<string, unknown>>;
