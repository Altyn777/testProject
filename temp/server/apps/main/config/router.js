import express from 'express';
import config from './config';

import index from'../routes/index';

module.exports = (app) =>
{
    includeStatic(app);
    includeRoutes(app);
    includeUndefinedRoutes(app);
};

// =====================================================================================================================

function includeStatic(app)
{
    app.use(express.static(config.server.static.dir_path));
}

function includeRoutes(app)
{
    app.use('/', index);
}

function includeUndefinedRoutes(app)
{
    app.use((req, res, next) =>
    {
        const err = new Error('Route Not Found');
        err.status = 404;

        next(err);
    });

    app.use((err, req, res, next) =>
    {
        const message = err.message;
        const error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.render('error', {message: message, stack: error.stack, status: error.status});
    });
}