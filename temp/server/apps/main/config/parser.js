import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

module.exports = (app) =>
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
};
