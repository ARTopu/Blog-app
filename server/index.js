const express = require ('express')
const cors = require ('cors')
const { connect } = require ('mongoose')
require ('dotenv').config()

const userRoutes = require('../server/routes/userRoutes')
const postRoutes = require('../server/routes/postRoutes')

const app = express()

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials:true, origin: "http//:localhost:3000"}))

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

connect(process.env.MONGO_URI).then(app.listen(5000, () => console.log(`Server running on port ${process.env.PORT}`))).catch(error => {console.log(error)})