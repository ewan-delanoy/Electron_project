const {app,BrowserWindow} = require('electron');
const path = require('path');

function generateBrowserWindow() {
    const window = new BrowserWindow({
        width : 1400,
        height : 1200
    });

    /*
    window.loadFile('./src/views/home/home.html');
    */
    window.loadFile(path.join(__dirname,'src','views','home','home.html'));
}

app.whenReady()
   .then(()=>{
    generateBrowserWindow();
    createWindow();  
    });

// Bout de code pour le cas où on est sur Mac
app.on('activate', () => {
    if(process.platform=== 'darwin' && BrowserWindow.getAllWindows().length === 0) {
        generateWindow();
    }
});  


// For Windows & Linux
app.on('window-all-closed', () => {
    if(process.platform!== 'darwin') {
        app.quit();
    }
});  


console.log("It's done");   