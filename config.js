const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUWY+qSBj9L/WqfQVZNelkFJDVFXGb3ExKKKAEAYtCxI7//YZe0v0w907PW6WW850653zfC8hyXCIbNWD4AgqCr5CidkmbAoEhGFdhiAjoggBSCIbANQy5DuSp6PYUsWIu/L5n+jdYWFI98I0yilPMeqFs8sz0GTy6oKiOKfb/AKjqB0mVSbQZ5XeWK4yzL/L33pw5W55uHi2D6A7jqJ3+yt0/g0eLCDHBWaQVMTojAlMbNQuIyffo8wqUJLMfT847qcJ4S2jFi4vNQZPNfGXMnesaqtZWP6JE/h79UTXq52N+cLkxHb1fK8HhuL7ruZPag7HuT8xoIHVCN3Uko36jX+IoQ4EZoIxi2nxb93yMm5sGFXfDXdB6jd2VvSe1KLN8z3KOi+P4tlB3/XQWct73iA/SU7+WlvgUMTd+NL50ck8elTNvUItbhdNslSPlYaMdJ2zylfiCfGQl+T+610af3DqGLBTnOLoGF5mqPuMssiXvLp3AOauhNQojmHY883v0rbm4Mu72KWlW04mNY3MlaOFpnkhlNZPV3b5RN64kXLfO/YvukFbkTyxJir3JTi1ny7XJng4deFksN3mymPS32pIUg8qLLI0LGWsz5m/hiBObkrDFpVCCxCwWcF7Z1lTYBbYb7AcWLb3Ktplo+fz6owQ1ZgCG7KMLCIpwSQmkOM/avT7HdgEMri7yCaKv8gKu4f0zjPcT6KW9rWoygx5mTtzJ4pIqDjkzS2rRWR3vUcd7Bl1QkNxHZYkCA5c0J80UlSWMUAmGf//sggzd6Jtxbbm2WohJSb2sKtIcBh+ufhxC38+rjLpN5ivtAhEwZD63EaU4i8pWxyqDxI/xFSkxpCUYhjAt0aMLAnTFPmrxgBCp/2QSUlaMXoanKhEO7EyIWspxnr1d4TnkIyRxT7wo+0+8JAhPA14OnjiRQdAXJYYNBNAF+L1n2je/tTCUAhciubqk8b0Xa3Cb0yWzKrjQYV5teNMeERSAISUV6oIj9JOqWOcJyv6Aiw7WOBJDH+7Ty6zMalsbQyitHM2pv+C+eQqGL59zSsmDFm+24hRJ24qgC86vEcTtz/scL7NcX5IYiR0MB8xf5Y+6VRIWxY8M0Rb4XfX2SYAoxGkJhkCx7Cwq9mNthvWLVOv6aBqNlGgEPl36iPtbnDaWbTSconJzxjDSSaDY5t0cGDrC/WCXrm9rbzeXd/pAZ5fP/wIChsAwODO3ynBxOMWXncrtRh2Bw4IXq/LRhZDJ6jl11hoPp+lsfMZKygmTwjtXJIPxFi2bYGq6oqnvNGtvMiRWGOTcxm1vfKTla7HdQU2CcWYte/YpZY4byy/pnqOhJiGFXAoNnk4q5OfLZGrKneY+tW+COzuFTDXNJ6azLKh1VmFsT906O3d0fddMZRuP3hrxdRCk7wMYv7bIy3u2Qoxe51kGW4/+052vOWce3S8g7yPyN1kab1w3lmkdDe50fBNWuyXG02axumU5zTaCJ3vs5H6d3K4r6oHH42cXFCmkYU7OYAhgFpAcB6ALUljS0WerrvEZlRSeCzBkJU5ieanPSY9fw6pCLOAHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ØFFIÇIÅL KY",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2348132770719",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'OFFUCAIL BOT',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'online',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





