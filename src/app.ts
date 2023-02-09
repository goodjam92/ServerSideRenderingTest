import express, { Request, Response } from "express";
import path from "path";

const app = express();
const serviceAccout = require("../ssr1-admin.json");

app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(8000, () => {
  console.log("Server Start");
  console.log(serviceAccout);
});
