const templateJSON =
    {
        confirmation: false,
        answer: {}
    };

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

class Responser
{

    static sendJSON(res, confirmation, answer)
    {
        let result = templateJSON;

        result.confirmation = confirmation;
        result.answer = answer;

        res.json(result);
    }

}

export default Responser;