import config from './config';

module.exports = (app) =>
{
    app.set('views', config.server.views.dir_path);
    app.set('view engine', 'ejs');
};
