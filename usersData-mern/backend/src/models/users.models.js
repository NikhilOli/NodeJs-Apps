import mongoose from 'mongoose';

const userSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        age: {
            type: Number,
            required: true
        },
        gender: {
            type: String,
        }
})


const User = mongoose.model('User', userSchema);

export default User;