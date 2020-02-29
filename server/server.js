const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../client/build"));
}

app.listen(port, () => {
    console.log(`Server is now running on port ${port}. Better go catch it!`);
    console.log(`publicPath is ${publicPath}`);
});
