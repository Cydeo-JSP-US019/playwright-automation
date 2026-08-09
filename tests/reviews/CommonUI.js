export class CommonUI{

    static async login(page){
        const encode = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString('base64');
        await page.setExtraHTTPHeaders( { 'Authorization': `Basic ${encode}` } );
        await page.goto(process.env.SEP_QA_URL);
    }

}