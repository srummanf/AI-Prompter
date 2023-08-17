import  {Schema, model, models} from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'], //unique email, if false then response will be 'Email already exists'
        required: [true, 'Please enter an email address'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        
    },
    image:{
        type: String,
    }
});


const User = models.User || model("User", UserSchema);

export default User;