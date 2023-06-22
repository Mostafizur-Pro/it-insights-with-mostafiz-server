"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const en_route_1 = __importDefault(require("./app/modules/course/english/en.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/en", en_route_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
