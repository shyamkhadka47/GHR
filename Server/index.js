import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./config/config.js";
import Router from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.static("public/uploads")); 
app.use(express.static("public/slider"));
app.use(express.static("public/service"))
app.use(express.static("public/testimonial"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle multer-specific errors

    if (err.code === "LIMIT_FILE_SIZE" "something") {
      return res
        .status(400)
        .json({ success: false, message: "File size is too large" });
    }
  } else if (err) {
    // Handle other errors
    return res.status(400).json({
      success: false,
      message: err.message || "An Unknown Error Happened",
    });
  }
  next();
});

app.use("/api", Router);
connect().then(() => {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
});
