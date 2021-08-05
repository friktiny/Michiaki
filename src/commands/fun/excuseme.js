const Command = require("../../structures/command");
const { Message, MessageAttachment } = require("discord.js");

module.exports = class ExcuseMeCommand extends Command {
  constructor(...args) {
    super(...args, {
    });
  }

  /**
   * @param {Message} message
   * @param {String[]} args
   */
  async do(message, args) {
    try {
      const text = args.slice(0).join(' ')
      if(!text) return message.channel.send({ content: "Please provide text." })

      this.client.memer.excuseme(text).then(image => {
          const bb = new MessageAttachment(image, "excuseme.png")
          message.channel.send({ files: [bb] })
      })
    } catch (err) {
      return message.channel.send({ content: err });
    }
  }
};
