import * as express from "express";
import router from "@/routes";
import db from "@/database/db";

const app = express();

app.use(express.json());
app.use(router);

db.sync({ force: false }).then(() => {
  console.log(`Database connected with ${process.env.DB_NAME}!`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
