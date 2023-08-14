const { app, BrowserWindow } = require('electron');

// Fonction pour créer la fenêtre principale
function createMainWindow() {
  // Créez une nouvelle instance de BrowserWindow
  const mainWindow = new BrowserWindow({
    width: 1200, // Définissez la largeur souhaitée
    height: 800, // Définissez la hauteur souhaitée
    // Définissez d'autres options de fenêtre selon vos besoins
  });

  // Chargez l'URL de votre application React
  mainWindow.loadURL(`http://localhost:5173/`);

  // Éventuellement, ouvrez les outils de développement pour la fenêtre (facultatif)
  mainWindow.webContents.openDevTools();
}

// Appelé lorsque Electron.js a terminé l'initialisation et est prêt à créer des fenêtres de navigation.
app.whenReady().then(() => {
  // Créez la fenêtre principale de votre application
  createMainWindow();

  // Gérez les autres événements de fenêtre, comme la fermeture de toutes les fenêtres
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});

// Gérez les événements spécifiques à macOS (si vous développez pour macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});
