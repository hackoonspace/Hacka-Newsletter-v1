"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const ejs_1 = require("ejs");
const routes_1 = __importDefault(require("./routes"));
const email_1 = __importDefault(require("./routes/email"));
const port = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static('public'));
app.engine('html', ejs_1.renderFile);
app.set('view engine', 'html');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', routes_1.default);
app.use('/email', email_1.default);
app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});
//# sourceMappingURL=index.js.map