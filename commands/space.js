const { SlashCommandBuilder } = require("@discordjs/builders");
const { fetch } = require("cross-fetch");

const API_PATH = "https://api.spaceflightnewsapi.net/v3";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("space")
    .setDescription("Get space blogposts")
    .addIntegerOption((option) =>
      option
        .setName("int")
        .setMinValue(1)
        .setMaxValue(10)
        .setDescription("Blogposts to fetch"),
    ),
  async execute(interaction) {
    await interaction.reply("Fetching posts...");
    const limit = interaction.options.getInteger("int") || 1;
    const query = new URLSearchParams({
      _limit: limit,
    });
    const data = await fetch(`${API_PATH}/blogs?${query}`).then((response) =>
      response.json(),
    );
    data.forEach(async (blogPost) => {
      await interaction.followUp(blogPost.url);
    });
  },
};
