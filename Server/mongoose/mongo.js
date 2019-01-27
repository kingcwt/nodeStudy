let
    mongoose=require('mongoose'),
    Schema=mongoose.Schema;

const usersSchema=new Schema({
    username:String,
    password:String,
    Date:Number
});


module.exports={
    Users:mongoose.model('Users',usersSchema)
};