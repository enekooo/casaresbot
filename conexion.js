const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://casaresbot:mongodb@cluster0.2ffcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Connected to MongoDB'))
.catch(err => console.log(err))