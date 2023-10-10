const djs = require('discord.js');

module.exports = {
    data: new djs.SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows this message'),

    async execute(client, interaction) {
        const commands = client.commands.map(command => {
            return {
                name: command.data.name,
                description: command.data.description
            }
        });

        const embed = new djs.MessageEmbed()
            .setTitle('Commands')
            .setDescription('Here are the commands you can use')
            .addFields({ name: 'Commands', value: commands.map(command => `\`${command.name}\` - ${command.description}`).join('\n') })
            .setColor('RANDOM');

        await interaction.reply({ embeds: [embed] });
    }
}