const Disabled = require('./disabled-model');

const checkExistingDay = async (req, res, next) => {
  const { year, month, day } = req.body;

  const allDays = await Disabled.findAll();
  const disabledDays = allDays.some((disabled) => {
    return (
      disabled.year === year && disabled.month === month && disabled.day === day
    );
  });
  if (disabledDays) {
    res.status(422).json({
      message: 'This date is already disabled',
    });
  } else {
    next();
  }
};

module.exports = {
  checkExistingDay,
};
