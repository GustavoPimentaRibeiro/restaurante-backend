import * as express from "express";
import * as mysql from "mysql2";
import router from "@/routes";
import dbConfig from "@/config/db.config";

const app = express();

export default mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

app.use(express.json());

app.use(router);

app.listen(3000, () => console.log("Listening on port 3000!"));
