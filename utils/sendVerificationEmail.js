const sendEmail = require('./sendEmail');

const sendVerificationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
  const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
  const message = `<p>Please Confirm your email by clickin the following link :
  <a href="${verifyEmail}"> Verify Email</a> </p>`;
  return sendEmail({
    to: email,
    subject: 'Email Confirmation',
    html: `<h4>Hello ${name}</h4>
     ${message}`,
  });
};
module.exports = sendVerificationEmail;
