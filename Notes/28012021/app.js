const nodemailer = require('nodemailer');
require('dotenv');

await client.verify(); // for testing connection
const result = await client.sendMail({
    from: process.env.MAIL_USER ,//MAIL_USER
    to: ,//<email-target>
    cc: ,//<email-target>
    bcc: ,//<email-target>
    subject: 'email subject',
    text: 'email text content', //optional text version of email
    html:'email html content', // html version of email
    attachments: //attachment
})

const client = nodemailer.createTransport({
    host: process.env.MAIL_HOST ,//MAIL_HOST
    port: process.env.MAIL_PORT ,//MAIL_PORT,
    secure: Boolean(process.env.MAIL_SECURE),
    auth:{
        type: 'login',
        user: process.env.MAIL_USER,
        pass:process.env.MAIL_PASSWORD,
    },
});