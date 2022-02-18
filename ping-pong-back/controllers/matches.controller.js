const { Match } = require('../models/matches.model');

async function getMatches(req, res) {

    console.log('%c⧭', 'color: #00a3cc', "hola matches");
    try {
        const matchesInfo = await Match.find()/*.select('winner advantage playerName1 playerName2 playerScore1 playerScore2')*/;
        
        if (matchesInfo) {
            console.log('%c⧭', 'color: #00e600', matchesInfo);
             return res.status(200).json({"success": false, "data": matchesInfo});
        } else {
            return res.status(204).json({"success": true, "data": []});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "message": "Error finding matches.", "data": []});
    }
}

async function saveMatch (req, res) {
    const {winner,  advantage, playerName1, playerName2, playerScore1, playerScore2} = req.body;
    console.log('%c⧭', 'color: #ff0000', req.body);

    try {
        if(winner && advantage!= null && advantage != undefined && playerName1 && playerName2 && playerScore1 != null && playerScore2!= null && playerScore1 != undefined && playerScore2!= undefined){
            const newMatch = await new Match({
                winner: winner,
                advantage: advantage,
                playerName1: playerName1,
                playerName2: playerName2,
                playerScore1: playerScore1,
                playerScore2: playerScore2
            }).save();

            if (newMatch != null) {
                return res.status(200).json({"success": true, "data": newMatch});
            } else {
                return res.status(204).json({"success": true, "data": []});
            }
        } else {
            return res.status(400).json({"success": true, "message": "Error BadRequest: variable(s) faltante(s)"});
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "message": "Error saving game match.", "data": []});
    }
}

module.exports = {
    saveMatch,
    getMatches
}