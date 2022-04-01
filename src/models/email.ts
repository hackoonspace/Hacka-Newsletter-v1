import mailchimp from './mailchimp';

const client = new mailchimp();

export default class Email {
    public async insertEmailToDatabase(email : string) : Promise<Boolean>{

        if(!email)
            return false;

        try {
            const response = await client.subscribeEmail(email);
            return response;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    public async deleteEmailFromDatabase(email : string) : Promise<Boolean>{

        if(!email)
            return false;

        try {
            const response = await client.unsubscribeEmail(email);
            return response;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}