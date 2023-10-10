const djs = require('discord.js');
const log = require('../logger');

module.exports = {
    name: djs.Events.ClientReady,
    async execute(client) {
        log.start('Bot is ready!')
    }
}