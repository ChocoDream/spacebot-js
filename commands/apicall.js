const { SlashCommandBuilder } = require("@discordjs/builders");
const { fetch } = require("cross-fetch");

const API_PATH = "https://jsonplaceholder.typicode.com/todos/";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("apicall")
    .setDescription("API call to jsonplaceholder")
    .addIntegerOption((option) =>
      option.setName("int").setDescription("Enter an integer"),
    ),
  async execute(interaction) {
    await interaction.deferReply();
    const id = interaction.options.getInteger("int") || 1;
    const data = await fetch(API_PATH + id)
      .then((response) => response.json())
      .then(({ title }) => {
        return title;
      });
    interaction.editReply(data);
  },
};
