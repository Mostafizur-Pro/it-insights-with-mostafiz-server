import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../../interfaces/common";
import { IPaginationOptions } from "../../../../interfaces/paginations";
import { enSearchableFields } from "./en.constant";
import { IEnglish, IEnglishFilters } from "./en.interface";
import { English } from "./en.model";

const createVoc = async (cow: IEnglish): Promise<IEnglish | null> => {
  const createCow = await English.create(cow);
  if (!createCow) {
    throw new Error("Failed to create English Voc!");
  }
  return createCow;
};
const getAllVoc = async (
  filters: IEnglishFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IEnglish[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: enSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await English.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await English.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export default {
  createVoc,
  getAllVoc,
};
