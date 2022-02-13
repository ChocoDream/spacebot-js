const { SlashCommandBuilder } = require("@discordjs/builders");
const { fetch } = require("cross-fetch");

const API_PATH = "https://aws.random.cat/meow";
module.exports = {
  data: new SlashCommandBuilder()
    .setName("cats")
    .setDescription("Get a random cat image"),
  async execute(interaction) {
    await interaction.deferReply();
    const { file } = await fetch(API_PATH).then((response) => response.json());
    interaction.editReply({ files: [file] });
  },
};
