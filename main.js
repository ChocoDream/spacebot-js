const { Client, Intents } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log("READY");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name} \nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "user") {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}
      Your id: ${interaction.user.id}
      Userprofile: ${interaction.user.avatarURL()} 
      Registered at: ${interaction.user.createdAt}`
    );
  }
});

client.login(DISCORD_TOKEN);
