const Reschedule = require('./reschedule-model');

const combinationDoesNotExist = async (req, res, next) => {
  try {
    const { confirmation, client_name } = req.body;
    const appointments = await Reschedule.findBy(confirmation, client_name);
    if (!appointments.length) {
      res
        .status(401)
        .json({ message: 'No appointment with those credentials found' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  combinationDoesNotExist,
};
