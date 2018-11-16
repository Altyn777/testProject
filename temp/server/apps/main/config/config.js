import AppRoot from 'app-root-path';
import path from 'path';

const config =
    {
        server:
            {
                port: 3000,

                static:
                    {
                        dir_path: path.join(AppRoot.path, 'static')
                    },

                views:
                    {
                        dir_path: path.join(AppRoot.path, 'server',  'apps', 'main', 'views')
                    },

                apps:
                    {
                        dir_path: path.join(AppRoot.path, 'server',  'apps'),
                        main_path: path.join(AppRoot.path, 'server',  'apps', 'main'),

                        included: ['userManager']
                    }
            }
    };


module.exports = config;
export default config;