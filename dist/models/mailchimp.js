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
Object.defineProperty(exports, "__esModule", { value: true });
const client = require('@mailchimp/mailchimp_marketing');
class Mailchimp {
    constructor() {
        client.setConfig({
            apiKey: process.env.MAILCHIMP_API_KEY,
            server: process.env.MAILCHIMP_PREFIX,
        });
        this.listId = process.env.MAILCHIMP_LIST_ID;
    }
    subscribeEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client.lists.batchListMembers(this.listId, {
                update_existing: true,
                members: [{
                        email_address: email,
                        status: 'subscribed'
                    }]
            });
            if (response.error_count > 0)
                return false;
            return true;
        });
    }
    unsubscribeEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const unsubscribeResponse = yield client.lists.batchListMembers(this.listId, {
                update_existing: true,
                members: [{
                        email_address: email,
                        status: 'unsubscribed'
                    }]
            });
            if (unsubscribeResponse.error_count > 0)
                return false;
            const subscriberHash = unsubscribeResponse.updated_members[0].id;
            yield client.lists.deleteListMember(this.listId, subscriberHash);
            return true;
        });
    }
}
exports.default = Mailchimp;
//# sourceMappingURL=mailchimp.js.map