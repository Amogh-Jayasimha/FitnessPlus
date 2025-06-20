import nodemailer from 'nodemailer';

export const sendEmail = async (subject, message, send_to, sent_from) => {
  
  //Create Email Transporter
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  //Option for sending email
  let options = {
    from: sent_from,
    to: send_to,
    subject: subject,
    html: message,
  };

  //Send email
  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

export default sendEmail;