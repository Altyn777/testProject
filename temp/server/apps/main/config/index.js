module.exports = (app) =>
{
    require('./view')(app);
    require('./parser')(app);
    require('./apps')(app);
    require('./router')(app);
};
