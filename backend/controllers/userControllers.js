export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Registration Logic
    res.send({ name, email, password });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
