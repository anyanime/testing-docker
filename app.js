//import and create an express app
const express = require('express');
const app = express()

//message as a response
let message = 'Hello world, this is my first time doing this. I am really glad I did.';

//create an endpoint api
app.get('/', (req, res) => res.send(message));

// now run the application and start listerning
app.listen(3000, () => {console.log('Your app is running on port 3000...')});


