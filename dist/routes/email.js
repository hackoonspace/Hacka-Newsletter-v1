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
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const email_1 = __importDefault(require("../models/email"));
const router = express_1.default.Router();
router.post('/subscribe', (0, express_validator_1.body)('email').isEmail(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            errors: errors.array()
        });
    const email = req.body.email;
    const emailModel = new email_1.default();
    const databaseResponse = yield emailModel.insertEmailToDatabase(email);
    if (databaseResponse)
        return res.send('E-mail cadastrado com sucesso');
    res.status(500).send('Problema ao cadastrar e-mail');
}));
router.post('/unsubscribe', (0, express_validator_1.body)('email').isEmail(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            errors: errors.array()
        });
    const email = req.body.email;
    const emailModel = new email_1.default();
    const databaseResponse = yield emailModel.deleteEmailFromDatabase(email);
    if (databaseResponse)
        return res.send('E-mail descadastrado com sucesso');
    res.status(500).send('Problema ao descadastrar o e-mail');
}));
exports.default = router;
//# sourceMappingURL=email.js.map