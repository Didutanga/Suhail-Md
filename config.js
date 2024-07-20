const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  SUHAIL_14_20_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICA1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJuUTVKV3p6M3R4b3JFNXB3OHRTdEFEdmVSYkdyZEQycFlra3lESnJydjB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0WmhrRGdoX1R0V3Zxd2dpbVUzLUV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJhMzhjZDU3LWY1OGYtNGIyZC05ZjBkLTFjOGRjMTljZjE1OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAxMzAsXG4gICAgICAyNTMsXG4gICAgICAxMjEsXG4gICAgICA4NixcbiAgICAgIDI1NSxcbiAgICAgIDIxNixcbiAgICAgIDEzMyxcbiAgICAgIDE2OCxcbiAgICAgIDE5MSxcbiAgICAgIDIxNSxcbiAgICAgIDEzMyxcbiAgICAgIDIzLFxuICAgICAgMTU4LFxuICAgICAgMjM5LFxuICAgICAgMTAsXG4gICAgICAyMTUsXG4gICAgICA4NixcbiAgICAgIDE1NixcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDEyOSxcbiAgICAgIDUyLFxuICAgICAgMTU1LFxuICAgICAgMjE4LFxuICAgICAgNSxcbiAgICAgIDQ0LFxuICAgICAgMTM0LFxuICAgICAgMixcbiAgICAgIDYwLFxuICAgICAgMTY0LFxuICAgICAgMTEsXG4gICAgICAyOSxcbiAgICAgIDE3LFxuICAgICAgMjIyLFxuICAgICAgMSxcbiAgICAgIDExNixcbiAgICAgIDc2LFxuICAgICAgNCxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEV1kzUTFGQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTUyMjE3MTc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NTI3Mzc3MzQyMDc1MzoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNdmFub0lERUtlUDc3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJjSnhlN1VBZ3kvZmZNTDhkekxlNmdUREQwUGYrSzI2VHkxeHdKcjlqeDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK2F1ektKQkVXWFVweTNramtnRnczOTJGOWt4TW5SMW0vVmZPb0wxQWFYRVYyUFFhN09meTJtdjlKa0p4NDhuTWV1eE5xczlLSkdlVTlRTDNndUNrQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjhjdDNIM1VucGM5dVlwaWtHMXhEK0dNNDVDQXJzV05QSFpBaWpqNzhabEdRejRVSjFENEJOYlE4RW14eHJ1T08wTENTL21naERBRDlBRFprTndBZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTUyMjE3MTc6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDg1MjI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkY5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCRjkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIveGlKeTUvb1pJN0NZVWpLNkNDMkxhT3lQRGJDcHEvelZOR2xvbG1mbFNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgxMDAwMzc4NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNDg1MjMwNzQ2XCJ9Igp9""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
