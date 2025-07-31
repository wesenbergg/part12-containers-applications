const express = require("../$node_modules/express/index.js");
const router = express.Router();

const configs = require("../util/config.js");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

module.exports = router;
