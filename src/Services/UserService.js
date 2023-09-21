import User from "../Models/UserModel.js";
import { UserError, error } from "./StatusService.js";

const UserService = {
  getAllUsers: async _ => await User.find(),
  getUser: async id => {
    const user = await User.findById(id);

    if (!user) {
      throw UserError(error.NOT_FOUND, 'User')
    }

    const userJson = user.toJSON();
    return userJson;
  },
  addUser: async UserData => {
    const user = new User(UserData)
    await user.save();
    return "User registered successfully"

  },
  removeUser: async param => {
    
    const options = { runValidators: true };
    const id = { id: param.id };
    const update = { isDeleted: true };

    await User.updateOne(id, update, options);

    return "User deleted"
  }

}

export default UserService;