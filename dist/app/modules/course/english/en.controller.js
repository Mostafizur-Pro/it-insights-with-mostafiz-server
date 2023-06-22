"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const en_Service_1 = __importDefault(require("./en.Service"));
const sendResponse_1 = __importDefault(require("../../../../share/sendResponse"));
const catchAsync_1 = __importDefault(require("../../../../share/catchAsync"));
const pick_1 = __importDefault(require("../../../../share/pick"));
const en_Service_2 = __importDefault(require("./en.Service"));
const en_constant_1 = require("./en.constant");
const paginations_1 = require("../../../../constants/paginations");
const createVoc = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { english } = req.body;
        const result = yield en_Service_1.default.createVoc(english);
        res.status(400).json({
            success: true,
            message: "English Voc created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create English Voc",
        });
    }
});
const getAllVoc = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, en_constant_1.enFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, paginations_1.paginationFields);
    const result = yield en_Service_2.default.getAllVoc(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: 400,
        success: true,
        message: "Vocabulary get successfully !",
        meta: result.meta,
        data: result.data,
    });
}));
exports.default = {
    createVoc,
    getAllVoc,
};
