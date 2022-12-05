const information = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text :`Hello I'm ${information.infos.Name} from ${information.infos.campus} campus`,
    e : "oO",
    T : "U "
}));
