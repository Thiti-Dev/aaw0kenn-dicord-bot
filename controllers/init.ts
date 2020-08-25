import Discord from 'discord.js'
const client = new Discord.Client();
//
// ─── IMPORT SETTINGS ────────────────────────────────────────────────────────────
//
import {token} from '../config/config.json'
// ────────────────────────────────────────────────────────────────────────────────
import {responseHandler} from './core'


client.once('ready', () => {
	console.log('[DEBUG]: Bot is ready!');
});

class Brain{
    // Brain acts like a core of the bot wheras it might be able to store such global variables that might get used later

    initialize():Promise<string>{
        return client.login(token);
    }
    alive():void{
        client.on('message', msg => {
            responseHandler(msg)
          });
    }
    
}

const Brain_instance = new Brain()


export {client}
export default Brain_instance