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
const recaptcha_1 = require("../utils/recaptcha");
const router = express_1.default.Router();
router.post('/subscribe', (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('token').isString(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            errors: errors.array()
        });
    const token = req.body.token;
    const recaptchaValidateResponse = yield (0, recaptcha_1.validateToken)(token);
    if (!recaptchaValidateResponse)
        return res.redirect('/?success=false');
    const email = req.body.email;
    const emailModel = new email_1.default();
    const databaseResponse = yield emailModel.insertEmailToDatabase(email);
    if (databaseResponse)
        return res.redirect('/?success=true');
    res.redirect('/?success=false');
}));
router.post('/unsubscribe', (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('token').isString(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            errors: errors.array()
        });
    const token = req.body.token;
    const recaptchaValidateResponse = yield (0, recaptcha_1.validateToken)(token);
    if (!recaptchaValidateResponse)
        return res.redirect('/descadastrar?success=false');
    const email = req.body.email;
    const emailModel = new email_1.default();
    const databaseResponse = yield emailModel.deleteEmailFromDatabase(email);
    if (databaseResponse)
        return res.redirect('/descadastrar?success=true');
    res.redirect('/descadastrar?success=false');
}));
exports.default = router;
//# sourceMappingURL=email.js.map