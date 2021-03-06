const Appoint = require('./appointments-model');

const checkBody = (req, res, next) => {
  const {
    appointment_month,
    appointment_day,
    appointment_year,
    appointment_time,
    client_name,
    client_phone,
  } = req.body;
  if (
    !appointment_month ||
    !appointment_day ||
    !appointment_year ||
    !appointment_time ||
    !client_name ||
    !client_phone
  ) {
    res.status(422).json({ message: 'Please fill all required fields' });
  } else {
    next();
  }
};

const checkExists = async (req, res, next) => {
  try {
    const {
      appointment_month,
      appointment_day,
      appointment_year,
      appointment_time,
    } = req.body;
    const all = await Appoint.findAll();
    const search = await all.some(
      (appoint) =>
        appoint.appointment_day === appointment_day &&
        appoint.appointment_month === appointment_month &&
        appoint.appointment_year === appointment_year &&
        appoint.appointment_time === appointment_time
    );
    if (search) {
      res.status(422).json({ message: 'This appointment has been booked' });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const checkId = async (req, res, next) => {
  try {
    const [id] = await Appoint.findById(req.params.id);
    if (!id) {
      res.status(404).json({ message: `id ${req.params.id} does not exist` });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkBody,
  checkId,
  checkExists,
};
