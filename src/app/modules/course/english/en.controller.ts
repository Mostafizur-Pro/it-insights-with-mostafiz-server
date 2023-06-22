import { Request, Response } from "express";
import englishService from "./en.Service";
import { English } from "./en.model";
import sendResponse from "../../../../share/sendResponse";
import { IEnglish } from "./en.interface";
import catchAsync from "../../../../share/catchAsync";
import pick from "../../../../share/pick";
import enService from "./en.Service";
import { enFilterableFields } from "./en.constant";
import { paginationFields } from "../../../../constants/paginations";

const createVoc = async (req: Request, res: Response) => {
  try {
    const { english } = req.body;
    const result = await englishService.createVoc(english);
    res.status(400).json({
      success: true,
      message: "English Voc created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create English Voc",
    });
  }
};

const getAllVoc = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, enFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await enService.getAllVoc(filters, paginationOptions);

  sendResponse<IEnglish[]>(res, {
    statusCode: 400,
    success: true,
    message: "Students retrieved successfully !",
    meta: result.meta,
    data: result.data,
  });
});
export default {
  createVoc,
  getAllVoc,
};
