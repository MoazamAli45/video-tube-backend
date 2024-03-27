import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import registerRoutes from "./routes/user.routes.js";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

// Add support for parsing URL-encoded data and increase the limit to 16kb
//  Data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));
app.use(cookieParser());

//   Main Route
app.get("/", (req, res) => {
  res.send("Welcome to the User Registration API");
});

app.use("/api/v1/users", registerRoutes);

export { app };
