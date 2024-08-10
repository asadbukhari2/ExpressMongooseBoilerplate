exports.userRegister = async (req, res) => {
  try {
    return res.status(200).json({ code: 200, message: 'Register Success!' });
  } catch (error) {
    return res.status(400).json({ code: 400, message: 'Error' });
  }
};
