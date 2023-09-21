import mongoose from "mongoose"

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  username: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    lowecase: true,
    required: [true, 'E-mail is required']
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
})

UserSchema.path("email").validate(async (email) => {
  const getEmail = await mongoose.models.users.countDocuments({email})
  return !getEmail
}, 'E-mail already exist');

const User = mongoose.model('users',UserSchema);

export default User;