import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import mongoose from "mongoose"
import kpiRoutes from "./routes/kpi.js"
import KPI from "./models/KPI.js"
import { kpis } from "./data/data.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginEmbedderPolicy({policy: "require-corp"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// Routes
app.use("/kpi", kpiRoutes)

const PORT = process.env.PORT || 9000
mongoose.connect(process.env.MONGOCOMPASS_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async()=>{
    app.listen(PORT, ()=>console.log(`server port: ${PORT}`))
    
    // add data one time 
    // await mongoose.connection.db.dropDatabase()
    // KPI.insertMany(kpis)
}).catch((error)=>console.log(`${error} did not connect`))
