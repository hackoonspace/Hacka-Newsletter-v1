const client = require('@mailchimp/mailchimp_marketing');

export default class Mailchimp {

    private listId : string | undefined;

    constructor() {
        client.setConfig({
            apiKey: process.env.MAILCHIMP_API_KEY,
            server: process.env.MAILCHIMP_PREFIX,
        });

        this.listId = process.env.MAILCHIMP_LIST_ID;
    }

    async subscribeEmail(email : string) {
    
        const response = await client.lists.batchListMembers(this.listId, {
            update_existing: true,
            members: [{
                email_address: email,
                status: 'subscribed'
            }]
        });

        if(response.error_count > 0)
            return false;

        return true;
    }

    async unsubscribeEmail(email : string) {

        const unsubscribeResponse = await client.lists.batchListMembers(this.listId, {
            update_existing: true,
            members: [{
                email_address: email,
                status: 'unsubscribed'
            }]
        });

        if(unsubscribeResponse.error_count > 0)
            return false;

        let subscriberHash = 0;

        if(unsubscribeResponse.total_updated)
            subscriberHash = unsubscribeResponse.updated_members[0].id;

        if(unsubscribeResponse.total_created)
            subscriberHash = unsubscribeResponse.new_members[0].id;

        if(!subscriberHash)
            return false;

        await client.lists.deleteListMember(
            this.listId,
            subscriberHash
        );
        
        return true;
    }
}