import UserService from "../Services/UserService"


export default UserController = {
  getAllUsers: async (req,res) => {
    try {
      const User = await UserService.getAllUsers()
      res.status(200).send(User)
    } catch(e) {
      if(!e.errCode) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e.errCode).send(e.message)
    }
  },
  getUser: async (req,res) => {
    try {
      const User = await UserService.getUser(req.param.id);
      res.status(200).send(User)
    } catch(e) {
      if(!e.errCode) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e.errCode).send(e.message)
    }
  },
  addUser: async (req,res) => {
    try {
      const User = await UserService.addUser(req.body)
      res.status(200).send(User)
    } catch(e) {
      if(!e.errCode) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e.errCode).send(e.message)
    }
  },
  removeUser: async (req,res) => {
    try {
      const User = await UserService.removeUser(req.body)
      res.status(200).send(User)
    } catch(e) {
      if(!e.errCode) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e.errCode).send(e.message)
    }
  }
}