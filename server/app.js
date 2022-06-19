import express from 'express'
import mongoose from 'mongoose'
import config from './config'

const app = express()
const {MONGO_URI} = config

// 실제 배포 환경
// 1. 서버의 보안적이 부분을 보완  
app.use(hpp())
app.use(helmet())

app.use(cors({origin : true, credentials : true})) // cors? 브라우저가 다른 도메인이나 port 가 다른 서버를 요청해주는것 , 보통 SPA에서는 서버에서 사용 
app.use(morgan("dev")) // 개발시 로그 확인 가능
 

mongoose.connet(MONGO_URI,{
    useNewUrlParser : true
})
.then(()=> console.log("MongoDB conncting Success!! "))
.catch((e) => console.log(e))

app.get('/')

export default app; 
