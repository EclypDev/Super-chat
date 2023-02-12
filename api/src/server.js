import Express from 'express'

import routes from './routes.js'
import mongoose from 'mongoose'

const app = new Express()
const PORT = 3000
const { Schema } = mongoose;

const uri = 'mongodb://127.0.0.1:27017/test'
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(uri, () => {
    console.log("Connected to MongoDB");
  });
}

const schusers = new Schema({
    name: String
});
const usermodel = mongoose.model('usermodel', schusers);
const nameuser = new usermodel({ name: 'Username'})
console.log(nameuser.name)


app.use(routes);
app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})