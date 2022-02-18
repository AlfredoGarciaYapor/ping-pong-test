const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema(
    {
        winner: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        advantage: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        playerName1: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        playerName2: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        playerScore1: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        winner: {
            type: String,
            required: true,
            index: true,
            unique: true
        },

    }
);

const Match = mongoose.model('Match', matchSchema);   

module.exports = {
    Match
}