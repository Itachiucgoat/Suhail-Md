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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_05_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNixcbiAgICAgICAgMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc3LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOQU9uRTNkdzRYa1dHQ3JSdUZwQURIS0h0YU9RWkJjai9uRUNqZ2R4Q3dVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0MTA0NjcxMTExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMzk4Qzc2M0NFQTJGQzUwNkNFQkE2QjczQzAyODczMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEyMzIzMzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNDEwNDY3MTExMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjVFNjI1MUVDRkE2OTI5NTg0RUYzODM0QjhFNzk5QkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMjMyMzM0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5KR01XZ0wzVC1tT3hKTjdZdElnZUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2I5MjE3MmYtNmQzMi00NWRkLTk3OWItNjJhM2I5OGRjMGU1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDEwNSxcbiAgICAgIDYxLFxuICAgICAgMTg4LFxuICAgICAgMTQxLFxuICAgICAgMjA3LFxuICAgICAgODUsXG4gICAgICAyNixcbiAgICAgIDc5LFxuICAgICAgMTk4LFxuICAgICAgMjE3LFxuICAgICAgMjM2LFxuICAgICAgMzYsXG4gICAgICA2MyxcbiAgICAgIDMsXG4gICAgICAyMzUsXG4gICAgICA5MSxcbiAgICAgIDE4NixcbiAgICAgIDEyMixcbiAgICAgIDM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDEwMixcbiAgICAgIDIyMSxcbiAgICAgIDIwMixcbiAgICAgIDI1MyxcbiAgICAgIDExOSxcbiAgICAgIDE5LFxuICAgICAgNjYsXG4gICAgICAxNjYsXG4gICAgICAyMTYsXG4gICAgICAxMjQsXG4gICAgICAxODUsXG4gICAgICA0LFxuICAgICAgMTkxLFxuICAgICAgMjA1LFxuICAgICAgNzgsXG4gICAgICAzMyxcbiAgICAgIDE0OCxcbiAgICAgIDEzMSxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTlhUV1BBVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjQxMDQ2NzExMTE6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLljY3FguKCteKxp8WC4oKyw5gg4oKz4rGg4oKxxYLisaTJjtO+IOKCrsmO4rGk4oKz4oKm4oKu5Y2NXCIsXG4gICAgXCJsaWRcIjogXCIxNTk5NzUxMTY2OTc2OTE6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzNEMFowREVNVFgzN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCYkJZaFI1RWllQnFjYlpmRUQ2dkxMMll4bnU4N2srQll4Z3YrbW5ZdHhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9IMlpZTWZHKzJZMWZSaG9vYjV0RzFhcnNBSW52QUJXU21VMHhmbjlpVWs0cW5PMnNqMDEySTFPZnB2bmRaWCs2SHBRUEliRmpNcUVxSHpxQkxYOEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInB6c0ExaHlzT2w1aFV1S1cwanpPSEFKc1FHZGtmZXNVZy96Q1FYU3RhRElpa1RpZkVWZ3k4dnFENW4raVluWnVLaVYrTzROaTgxYVNsbm5EbXZrMUFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MTA0NjcxMTExOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTIzMjMyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUc4M1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRzgzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiT1RiSVRGTXJmU1d5cEUvVnhMZ1ZFTjRPbG41R0NqWjE4T3Y5WENqMGlUYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4Njc0NTk1NjMsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMjg0MzY3NTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "♥️",
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
