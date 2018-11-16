import User from '../models/User';

let users =
    [
        new User({id: 1, login: 1, password: 1}),
        new User({id: 2, login: 2, password: 2}),
        new User({id: 3, login: 3, password: 3})
    ];

// # ===================================================================================================================

class UserController
{

    static getAll(req, res)
    {
        util.Responser.sendJSON(res, true, users);
    }

    static getByID(req, res)
    {
        const id = +req.params.id;
        const user = users.filter(user => user.id === id);

        util.Responser.sendJSON(res, true, user);
    }

    static deleteByID(req, res)
    {
        const id = +req.params.id;
        users = users.filter(user => user.id !== id);

        util.Responser.sendJSON(res, true, users);
    }

    static updateByID(req, res)
    {
        const id = +req.params.id;
        users.map(user =>
        {
            if (user.id === id)
            {
                user.login = req.body.login || user.login;
                user.password = req.body.password || user.password;
            }
        });

        util.Responser.sendJSON(res, true, users);
    }

}

export default UserController;