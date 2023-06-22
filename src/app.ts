import express, { Application, Request, Response } from "express";
import englishRoute from "./app/modules/course/english/en.route";
import cors from "cors";

const app: Application = express();

// middleware
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/en", englishRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
