"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.English = void 0;
const mongoose_1 = require("mongoose");
const englishSchema = new mongoose_1.Schema({
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
exports.English = (0, mongoose_1.model)("English", englishSchema);
