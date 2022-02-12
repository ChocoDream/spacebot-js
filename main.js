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
    await interaction.reply("Server info");
  } else if (commandName === "user") {
    await interaction.reply("User info.");
  }
});

client.login(DISCORD_TOKEN);
