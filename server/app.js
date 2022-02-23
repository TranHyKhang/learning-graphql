const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();


app.use(cors());
const url = 'mongodb+srv://TranHyKhang:TranHyKhang@cluster0.sjl1v.mongodb.net/graphql-learning?retryWrites=true&w=majority'

mongoose.connect(url);
mongoose.connection.once('Open', () => {
    console.log('Connected to database')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log(`Server start at port 4000`)
})