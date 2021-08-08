import mongoose from 'mongoose'

// Create Schema
const PostSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true, 
        index : true
    },
    contents : {
        type : String,
        required : true, 
    },
    views : {
        type : Number,
        defualt : -2, 
    },
    fileUrl : {
        type : String,
        default : "https://source.unsplash.com/random/301x201" // 이미지 랜덤 불러오기 
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    date : {
        type : String,
        default : moment().format("YYYY-MM-DD hh:mm:ss")
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "comment"    
        }
    ],
    creator : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"  

    },
    // comments : [  // User한사람이 여러개를 가질 수 있음 -> 일대다 관계 
    //     {
    //         post_id : {
    //             type : mongoose.Schema.Types.ObjectId,
    //             ref : "post"
    //         },
    //         comment_id : {
    //             type : mongoose.Schema.Types.ObjectId,
    //             ref : "comment", 
    //         },            
    //     },
    // ],
});

const Post = mongoose.model(("post", PostSchema));

export default Post; 