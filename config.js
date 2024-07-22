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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "24104671111";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_33_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICA3OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICA5LFxuICAgICAgICA5NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDU4LFxuICAgICAgICA0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDU1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUzLFxuICAgICAgICA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDksXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1rZnB0Ni85bHZwQ2JMZEZDaHVwQkQwT1FSUnlqZkFFc1V5TUg2Q2k2STg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQxMDQ2NzExMTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhBRDA1MjVBMjNDMjMyRDUzMTQ3MTA5MzRERTk3N0Y4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTU2NTIzM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTMTJKZDdKQ1NsYW8yYThyRXhvOE93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiZGYxNWU3LTZkMmUtNDdkZC04MDMxLTI2ODQ0OGE4YzU0NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTY1LFxuICAgICAgMjA5LFxuICAgICAgMjIxLFxuICAgICAgOSxcbiAgICAgIDEyLFxuICAgICAgNjUsXG4gICAgICA4NyxcbiAgICAgIDU3LFxuICAgICAgMjI3LFxuICAgICAgMTAzLFxuICAgICAgMTE3LFxuICAgICAgMjYsXG4gICAgICA2MCxcbiAgICAgIDUyLFxuICAgICAgNjUsXG4gICAgICA5NSxcbiAgICAgIDY2LFxuICAgICAgMTE4LFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAzNSxcbiAgICAgIDcyLFxuICAgICAgOTAsXG4gICAgICAxNTUsXG4gICAgICAyNDEsXG4gICAgICAyNixcbiAgICAgIDIwMyxcbiAgICAgIDE5MyxcbiAgICAgIDIzOSxcbiAgICAgIDMsXG4gICAgICAxOTUsXG4gICAgICAyOCxcbiAgICAgIDEwNixcbiAgICAgIDg2LFxuICAgICAgMTQsXG4gICAgICAxNzIsXG4gICAgICAxOTAsXG4gICAgICAyNyxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBQVFKR0xZNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxMDQ2NzExMTE6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLljY3FguKCteKxp8WC4oKyw5gg4oKz4rGg4oKxxYLisaTJjtO+IOKCrsmO4rGk4oKz4oKm4oKu5Y2NXCIsXG4gICAgXCJsaWRcIjogXCIxNTk5NzUxMTY2OTc2OTE6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzdEMFowREVLbUE5TFFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCYkJZaFI1RWllQnFjYlpmRUQ2dkxMMll4bnU4N2srQll4Z3YrbW5ZdHhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkE4K2FhTDBTbXVldEVKSnQrRnVMQzVQbEpIQVV0S2FhSXVVOXZYYXdyZWNCLzhoZ25ObU8rYTUxZ2RVR1h4RUNHM0w1OTRERE9jTm1FaEIyRzJCRkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1Bb0VRQWpRdjZ5cGhBYmNMZnE2akxNUWUzTmpacTg4dG03MWU5RlkvbnoxNXBxTFZJdmtvRUR2YUN1QmNFTzNJU0kyS2FiQUFobFFhYWtWUDVKQURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MTA0NjcxMTExOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTU2NTIzMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdSa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1JrLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS0FaQmRyakg1V1AySWxNanJ0SWI0OVFKdmJsUEhrbnQ4MzdLc1FTQ29NQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4Njc0NTk1NjYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzIxNTY1MTI5NTA0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "ICHIGO ALPIRIX-TYRANT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GOJO"  ).toUpperCase(),



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
