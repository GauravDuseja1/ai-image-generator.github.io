import mongoose from 'mongoose'
const connectDB=(url)=>{
    //these option will hrlp when working with search functionality later on
    mongoose.set('strictQuery',true);
    mongoose.connect(url).then(()=>console.log("Mongodb connected"))
    .catch((err)=>console.log(err));
}
export default connectDB