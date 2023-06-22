"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const en_controller_1 = __importDefault(require("./en.controller"));
const enRoute = express_1.default.Router();
enRoute.post("/create-voc", en_controller_1.default.createVoc);
enRoute.get("/", en_controller_1.default.getAllVoc);
exports.default = enRoute;
