module.exports = {
  Admins: ["852737378967486464", "838103098891173918", "827210886421807145"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/8brzF9dN7M", //Support Server Link
  Token: process.env.Token || "ODU2MDUwMzc5NjM2NDczOTA2.YM7ZCw.w3MYj6KYOZXbzxvQANFo25Lx1i8", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "856050379636473906", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "qvFUT9UlBwg8n3fIUbeuRgDf7ZeTiTey", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "910ac1d164ba495eb1f2c808d3610090", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "a62ecc35afa24f4488b1b76a10960d3d", //Spotify Client Secret
  },
};
