const db = require("../config/db");

const query = async (query_string, values, success, failure) => {
  try {
    const results = await db.query(query_string, values);
    success(results);
  } catch (e) {
    failure(e);
  }
};

module.exports.GET_HOME = (req, res) => {
  res.json({});
};

module.exports.POST_LOGIN = (req, res) => {
  const { email, pass } = req.body;
  query(
    "SELECT user_id, user_email FROM cm_user WHERE user_email = ? AND user_password = md5(?)",
    [email, pass],
    (results) => {
      req.session.user_id = results[0].user_id;
      req.session.email = results[0].user_email;
      res.json({ user_id: results[0].user_id });
    },
    (error) => {
      console.error(error);
      res.sendStatus(500);
    }
  );
};
