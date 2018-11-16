import path from 'path';
import config from './config';

const apps = config.server.apps.included;
const dir = config.server.apps.dir_path;


function includeApps(main)
{
    apps.forEach((app) =>
    {
        require(path.join(dir, app))(main);
    });
}


module.exports = includeApps;