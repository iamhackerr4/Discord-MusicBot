module.exports = {
  Admins: ["852737378967486464", "663970982209388544"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ".", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/soowhat", //Support Server Link
  Token: process.env.Token || "ODg2NjI0MDk0MTE0NzA5NTQ0.YT4TCA.4ts-P-TWvv2yO-3H4pw-YQfbFhU", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "886624094114709544", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "JfU4B57kkvr5DLdFnMD7nBwQQKpLTXx1", //Discord Client Secret
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
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "5f93f0378ebb4cae8a24bb4fafd4e2bc", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "662492fa51644345b169eeae8d7a6700", //Spotify Client Secret
  },
};
