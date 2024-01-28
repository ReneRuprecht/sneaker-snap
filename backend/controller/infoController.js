const infoController = {
  sneakerInfo: (_, res) => {
    res.json({
      status: "infocontroller - info",
    });
  },
};

module.exports = infoController;
