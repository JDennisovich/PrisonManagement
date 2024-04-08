const express = require('express');

const app = express();

const port_num = 4000

//middleware setup
app.use(express.json());

//database setup (dbeaver), 4/8/2024 or 4/15/2024
const prisonerRoute = require('./routes/prisonerRoute')
app.use('/p', prisonerRoute)

const guardRoute = require('./routes/guardRoutes')
app.use('/g', guardRoute)

app.listen(port_num,() => {
    console.log(`server is running on http://localhost:${port_num}`)
} )