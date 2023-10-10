const djs = require('discord.js');
const client = require('./client');
const log = require('./logger');
require('dotenv').config();

log.start("Starting bot...")

require('./db.js')
require('./handlers/events.js')
require('./handlers/commands.js')

try {
    client.login(process.env.DISCORD_TOKEN);
} catch (error) {
    console.error(error);
}