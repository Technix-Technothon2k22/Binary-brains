const UserModel = require("../Model/UserModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
export const UserRegister = async (req: any, res: any): Promise<void> => {
  const newUser = new UserModel(req.body);
  try {
    const hashedPassword = await bcrypt.hash(newUser.Password, 12);

    newUser.Password = hashedPassword;
    const savedUser = await newUser.save();
    return res.status(200).json({
      message: "User Saved succesfully",
      data: savedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error caused due to ${error}`,
    });
  }
};

export const UserLogin = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({
      Email: email,
    });
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found with provided credentials" });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(404).send({ message: "Invalid Password" });
    }
    const token = await jwt.sign(
      { email: user.Email, password: user.Password },
      "mysupersecretkeybruh"
    );
    return res.status(200).json({
      message: "User Logged in succesfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: `User login failed due to ${error}`,
    });
  }
};
