const express =require("express");
const cors=require ("cors");
const mongoose=require ("mongoose");
const userRoutes=require("./routes/UserRoutes")
const app=express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://netflix:netflix@cluster0.yspy8dp.mongodb.net/netflix",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
console.log("db connected")
});





app.use("/api/user",userRoutes);
app.listen(5173,console.log("server started"));