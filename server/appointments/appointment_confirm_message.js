const twilio = require("twilio");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

const sendClientConfirmationMessage = (req, res) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.client_phone,
      body: `Hey ${req.body.client_name}, this is a friendly reminder for your appointment with Laysha on ${req.body.appointment_month}/${req.body.appointment_day}/${req.body.appointment_year} at ${req.body.appointment_time}. The address is 2258 Tyson Ave, Philadelphia PA 19111. If you have any questions, please reach out to me. Your confirmation code is ${req.body.confirmation}, Thank you!`,
    })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const sendAdminConfirmationMessage = (req, res) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.ADMIN_PHONE_NUMBER,
      body: `Hey Laysha, ${req.body.client_name} has scheduled an appointment for ${req.body.appointment_month}/${req.body.appointment_day}/${req.body.appointment_year} at ${req.body.appointment_time}. `,
    })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const rescheduleConfirmationMessage = (req, res) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.client_phone,
      body: `Hey ${req.body.client_name}, your appointment has been rescheduled for ${req.body.appointment_month}/${req.body.appointment_day}/${req.body.appointment_year} at ${req.body.appointment_time}. The address is 2258 Tyson Ave, Philadelphia PA 19111. If you have any questions, please reach out to me. Thank you!`,
    })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const rescheduleConfirmationMessageForAdmin = (req) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.ADMIN_PHONE_NUMBER,
      body: `Hey Laysha, ${req.body.client_name} has rescheduled their appointment for ${req.body.appointment_month}/${req.body.appointment_day}/${req.body.appointment_year} at ${req.body.appointment_time}. `,
    })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const cancelConfirmationMessageForAdmin = (appoint) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.ADMIN_PHONE_NUMBER,
      body: `Hey Laysha, ${appoint.client_name} has CANCELED their appointment for ${appoint.appointment_month}/${appoint.appointment_day}/${appoint.appointment_year} at ${appoint.appointment_time}.`,
    })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

const cancelConfirmationMessage = (appoint) => {
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: appoint.client_phone,
      body: `Hey ${appoint.client_name}, your appointment for ${appoint.appointment_month}/${appoint.appointment_day}/${appoint.appointment_year} at ${appoint.appointment_time} has been canceled.`,
    })
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  sendAdminConfirmationMessage,
  sendClientConfirmationMessage,
  rescheduleConfirmationMessage,
  rescheduleConfirmationMessageForAdmin,
  cancelConfirmationMessage,
  cancelConfirmationMessageForAdmin,
};
