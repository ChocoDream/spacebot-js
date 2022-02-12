const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
  async execute(interaction) {
    await interaction.reply(`Your tag: ${interaction.user.tag}
    Your id: ${interaction.user.id}
    Userprofile: ${interaction.user.avatarURL()} 
    Registered at: ${interaction.user.createdAt}`);
  },
};
