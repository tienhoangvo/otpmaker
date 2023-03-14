"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateOTP = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('');
exports.default = generateOTP;
