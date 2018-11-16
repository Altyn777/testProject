const config = require('../apps/main/config/config');

function onError(error)
{
    console.log(`| =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= |`);

    switch (error.code)
    {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening()
{
    console.log(`| =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= |`);
    console.log(`| Server was started on port: ${config.server.port}. `);
    console.log(`| Time: ${new Date()}. `);
    console.log(`| =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= |`);
}

module.exports.onError = onError;
module.exports.onListening = onListening;