require("dotenv").config();
//import section
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DB connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("mongoose failed with", err);
});

//import routes
const productRouter = require("./routes/product.routes");
const categoryRouter = require("./routes/category.routes");
const authRouter = require("./auth/auth.routes");
const  addressRouter =require("./routes/address.routes")
//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes middlewares
app.use("/products", productRouter);
app.use("/categories",categoryRouter);
app.use("/auth",authRouter);
app.use("/address", addressRouter)
//server listening
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`);
});
