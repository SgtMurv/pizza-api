import * as dotenv from 'dotenv'
import * as express from 'express'
import routes from './routes/index'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

dotenv.config()

createConnection()
    .then(connection => {
        const app = express()
        // let express know for all enpoints, look at the routes module.
        app.use('/', routes)
        app.listen(process.env.API_PORT, () =>
            console.log(
                `Your 🍕 pizza API is running on port ${process.env.API_PORT}!`,
            ),
        )
    })
    .catch(error => {
        // console.log(error)
        console.log('OOPS!!')
    })
