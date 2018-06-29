const Discord = require("discord.js");
const client = new Discord.Client();

// Only add the event listener once
client.on("ready", () => {
	console.log("Bot ready");
	client.user.setActivity('kutt.it/dash | >help');

	// Initiate variables here
	var ball8 = [
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
	];
	var foods = [
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
	];
	var gifs = [
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
	];
});

// Same here, only one event listener per event (usually)
// Also this is normal javascript, with the extra functionallity of discord.js and node.js
client.on("message", (message) => {
	if (message.content.endsWith("?>")) {
		var randomAnswer = ball8[Math.floor(Math.random() * ball8.length)];
		message.channel.send(randomAnswer);
	} else if (message.content.startsWith(">help")) {
		message.channel.send({
			embed: {
				color: 3447003,
				description: "**Commands** \n >help - Sends this help message. \n >randomgif - Sends a random GIF. \n ?> at the end of a question - Triggers the magic8 ball feature. \n >ping - Test the bot. \n >randomfood - Can't decide what to eat? Run this command for inspiration. \n \n**About** \nDash is a A multifuncional & open-source Discord bot that has many features to keep you entertained!  \n \n**Development** \nDash is developed by Kerr#5953 in his spare time. It is written in discord.js and is open-source on GitHub. \n \n**Support Dash** \nYou can donate to support the bot on Kerr's Buy Me A Coffee page, all donations are optional and greatly appreciated. https://buymeacoff.ee/kerrtrvs"
			}
		});
	} else if (message.content.startsWith(">ping")) {
		message.channel.send({
			embed: {
				color: 3447003,
				description: ":ping_pong: Pong! - " + client.ping + "ms"
			}
		});
	} else if (message.content.startsWith(">ping")) {
		message.channel.send({
			embed: {
				color: 3447003,
				description: ":ping_pong: Pong! - Bot working as expected."
			}
		});
	} else if (message.content.startsWith(">randomfood")) {
		var randomAnswer = foods[Math.floor(Math.random() * foods.length)];
		message.channel.send(randomAnswer);
	} else if (message.content.startsWith(">randomgif")) {
		var randomAnswer = gifs[Math.floor(Math.random() * gifs.length)];
		message.channel.send(randomAnswer);
	}
});

client.login("");
