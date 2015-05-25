'use strict';

import app from 'app';
import BrowserWindow from 'browser-window'
import crashReporter from 'crash-reporter';

import MainWindow from './mainWindow';

// Report crashes to our server.
crashReporter.start();

// Keep track of the windows
let windows = {};

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Start the app
app.on('ready', function() {
  // Create the main window
  var mainWindow = new MainWindow();
  windows.main = mainWindow;

  // Remove the mainwindow from the window list when it is closed
  mainWindow.on('closed', function() {
    delete windows.main;
  });
});

