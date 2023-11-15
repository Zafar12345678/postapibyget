const express = require("express");
const app = express();
const cors = require("cors"); // Corrected the middleware name
app.use(cors({
    origin: "*"
}));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://merningday123:merningday123@cluster0.6llqgoh.mongodb.net/software?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

const post_route = require("./routes/postRoute");
app.use("/api", post_route);

app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
