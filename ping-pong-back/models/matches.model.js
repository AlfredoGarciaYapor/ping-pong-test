const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema(
    {
        winner: {
            type: String,
            required: true,
            
        },
        advantage: {
            type: Number,
            required: true,
            
        },
        playerName1: {
            type: String,
            required: true,
            
        },
        playerName2: {
            type: String,
            required: true,
           
        },
        playerScore1: {
            type: Number,
            required: true,
            
        },
        playerScore2: {
            type: Number,
            required: true,
            
        },

    }
);

const Match = mongoose.model('Match', matchSchema);   

module.exports = {
    Match
}