import UserService from "../Services/UserService.js"

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const User = await UserService.getAllUsers()
      res.status(200).send(User)
    } catch (e) {
      if (!e.statusCode && !e._message) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e?.statusCode || 400).send(e?.message || e?._message)
    }
  },
  getUser: async (req, res) => {
    try {
      const User = await UserService.getUser(req.params.id);
      res.status(200).send(User)
    } catch (e) {
      if(e.reason) {
        res.status(406).send('Not valid id');
        return
      }
      if (!e.statusCode && !e._message) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e?.statusCode || 400).send(e?.message || e?._message)
    }
  },
  addUser: async (req, res) => {
    try {
      const User = await UserService.addUser(req.body)
      res.status(200).send(User)
    } catch (e) {
      if (!e.statusCode && !e._message) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e?.statusCode || 400).send(e?.message || e?._message)
    }
  },
  removeUser: async (req, res) => {
    try {
      await UserService.removeUser(req.body)
      res.status(200).send('User deleted')
    } catch (e) {
      if (!e.statusCode && !e._message) {
        res.status(500).send('Internal Error')
        return;
      }
      res.status(e?.statusCode || 400).send(e?.message || e?._message)
    }
  }
}

export default UserController