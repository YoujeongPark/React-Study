import mongoose from 'mongoose'

// Create Schema
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true, 
    },
    email : {
        type : String,
        required : true,
        unique  : true // 같은 값이 입력이 되지 않게 
    }, 
    password : {
        type : String,
        required : true, 
    }, 
    role : {
        type : String,
        enum : ["MainJuin", "SubJuin", "User"],
        default : "User"
    }, 
    register_date : {
        type : Date,
        //default : Date.now, // Mongodb -> UTC 기준 
        default : moment().format('YYYY-MM-DD hh:mm:ss')  
    }, 
    comments : [  // User한사람이 여러개를 가질 수 있음 -> 일대다 관계 
        {
            post_id : {
                type  : mongoose.Schema.Types.ObjectId,
                ref : "post",
            },
            comment_id : {
                type : mongoose.Schema.Types.ObjectId,
                ref : "comment",
            },
        },
    ],
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "post",
        },
    ],
});

const User = mongoose.model(("user", UserSchema));

export default User; 