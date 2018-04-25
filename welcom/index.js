/*import morning from "./morning";
import evening from "./evening";

export default {
    getMoningMessage: function() { console.log(morning); },
    getEveningMessage: function() { console.log(evening); }

}*/

var morning = require("./morning");
var evening = require("./evening");

module.exports = {
    getMoningMessage: function() { console.log(morning); },
    getEveningMessage: function() { console.log(evening); }
}