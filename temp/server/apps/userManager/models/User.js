class User
{
    id = null;
    login = null;
    password = null;

    constructor(params)
    {
        const {id, login, password} = params;

        this.id = id || this.id;
        this.id = login || this.login;
        this.id = password || this.password;
    }
}

module.exports = User;
export default User;