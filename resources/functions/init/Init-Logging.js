const log = require("electron-log");

exports.InitializeLogging = function () {


    console.log('---------------------------------------------------------------------')
    console.log('Apple-Music-Electron application has started.');
    console.log("---------------------------------------------------------------------")
    console.log = log.log;


}