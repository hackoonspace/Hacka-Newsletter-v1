"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/descadastrar', (req, res) => {
    res.render('descadastrar.ejs');
});
router.get('/privacidade', (req, res) => {
    res.render('privacidade.ejs');
});
exports.default = router;
//# sourceMappingURL=index.js.map