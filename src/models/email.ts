//import database from './database';

export default class Email {
    public async insertEmailToDatabase(email : String) : Promise<Boolean>{

        if(!email)
            return false;

        try {

            return true;
        } catch (e) {

            return false;
        }
    }

    public async deleteEmailFromDatabase(email : String) : Promise<Boolean>{

        if(!email)
            return false;

        try {

            return true;
        } catch (e) {

            return false;
        }
    }
}