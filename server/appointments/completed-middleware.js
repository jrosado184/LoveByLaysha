const Completed = require("./completed-model");

const checkId = async (req, res, next) => {
  try {
    const [id] = await Completed.findById(req.params.id);
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
  checkId,
};
