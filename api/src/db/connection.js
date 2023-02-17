import mongoose from "mongoose";

const URL = 'mongodb://127.0.0.1:27017/test'

mongoose.set('strictQuery', true);

mongoose.connect(URL, {
    useNewUrlParser: true
})
.then(db => console.log('Db is connected'))
.catch(err => console.log(err));;