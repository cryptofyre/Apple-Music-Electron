const {app} = require('electron')
const gotTheLock = app.requestSingleInstanceLock();

exports.InstanceHandler = function () {


    if (!gotTheLock && !app.config.advanced.allowMultipleInstances) {
        console.log("[Apple-Music-Electron] Existing Instance is Blocking Second Instance.")
        app.quit();
        return true
    } else {
        app.on('second-instance', (_e, argv) => {
            if (argv.indexOf("--force-quit") > -1) {
                app.quit()
                return true
            } else if (app.win && !app.config.advanced.allowMultipleInstances) {
                app.win.show()
            }
        })
    }


}