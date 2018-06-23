const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Bot ready");
});

client.on('ready', () => {
  client.user.setActivity('bot.ktrvs.com | >help')
})

client.on("message", (message) => {
  if (message.content.endsWith("?>")) {
    var answers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook is good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook is not so good",
      "Very doubtful",
    ]

    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(">help")) {
     message.channel.send({embed: {
     color: 3447003,
     description: "**Commands** \n >help - Sends this help message. \n >randomgif - Sends a random GIF. \n ?> at the end of a question - Triggers the magic8ball feature. \n >ping - Test the bot. \n >randomfood - Can't decide what to eat? Run this command for inspiration. \n \n **About** \n Dash is a A multifuncional & open-source Discord bot that has many features to keep you entertained!  \n \n **Development** \n Dash is developed by Kerr#0001 in his spare time. It is written in discord.js and is open-source on GitLab. \n \n **Support Dash** \n You can donate to support the bot on Kerr's buymeacoffee page, all donations are optional and greatly appreciated. https://buymeacoff.ee/kerrtrvs"
     }});
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(">ping")) {
     message.channel.send({embed: {
     color: 3447003,
     description: ":ping_pong: Pong! - Bot working as expected."
     }});
  }
});
client.on("message", (message) => {
  if (message.content.startsWith(">randomfood")) {
    var answers = [
      ":hamburger: Hamburger",
      ":cheese: Cheese",
      ":salad: Salad",
      ":apple: Apple",
      ":bread: Bread",
      ":pizza: Pizza",
      ":ice_cream: Ice Cream",
      ":taco: Taco",
      ":grapes: Grapes",
      ":watermelon: Watermelon",
      ":pineapple: Pineapple",
      ":corn: Corn",
      ":strawberry: Strawberry",
      ":fries: Fries",
      ":cookie: Cookie",
      ":peach: Peach",
    ]

    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith(">randomgif")) {
    var answers = [
      ":dividers: - https://www.tenor.co/qJZq.gif",
      ":dividers: - https://www.tenor.co/TqVN.gif",
      ":dividers: - https://www.tenor.co/F0s5.gif",
      ":dividers: - https://www.tenor.co/yjcD.gif",
      ":dividers: - https://www.tenor.co/EzOq.gif",
      ":dividers: - https://www.tenor.co/L696.gif",
      ":dividers: - https://www.tenor.co/syJf.gif",
      ":dividers: - https://www.tenor.co/VhGC.gif",
      ":dividers: - https://www.tenor.co/pPg6.gif",
      ":dividers: - https://www.tenor.co/o5jq.gif",
      ":dividers: - https://www.tenor.co/HN8k.gif",
      ":dividers: - https://www.tenor.co/sYrX.gif",
      ":dividers: - https://www.tenor.co/RqJ4.gif",
      ":dividers: - https://www.tenor.co/wfui.gif",
      ":dividers: - https://www.tenor.co/Pjqr.gif",
      ":dividers: - https://www.tenor.co/xWVT.gif",
      ":dividers: - https://www.tenor.co/WSUv.gif",
      ":dividers: - https://www.tenor.co/tVsU.gif",
      ":dividers: - https://www.tenor.co/zyLg.gif",
      ":dividers: - https://www.tenor.co/x2sa.gif",
      ":dividers: - https://www.tenor.co/P6aj.gif",
      ":dividers: - https://www.tenor.co/XIgu.gif",
    ]

    var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    message.channel.send(randomAnswer);
  }
});

client.login(proccess.env.BOT_TOKEN);
