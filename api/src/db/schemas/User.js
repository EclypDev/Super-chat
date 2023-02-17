import { Schema } from "mongoose";
import mongoose from "mongoose";

const UsersSchema = new Schema({
    name: {type: String, require: true},
    id: {type: String, require: true},
    address: {type: String} 
}, { timestamps: true });

const Users = mongoose.model('users', UsersSchema);

export default Users