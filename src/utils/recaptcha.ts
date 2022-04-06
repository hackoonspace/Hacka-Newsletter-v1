import axios from 'axios';

export async function validateToken(token: string) {
    const secret_key = process.env.RECAPTCHA_SECRET_KEY;
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${token}`;
    
    try {
        const responseJson = await axios.post(url);
        const response = await responseJson.data; 

        if(responseJson.status === 200 && response.success){
            if(response.score >= 0.5)
                return true;
            
            return false;
        }

        return false;
    } catch (err) {
        console.log(err);
        return false;
    };
}