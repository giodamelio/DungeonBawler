'use strict';

import {EventEmitter} from 'events';
import path from 'path';

import app from 'app';
import BrowserWindow from 'browser-window';
import Menu from 'menu';
import MenuItem from 'menu-item';

class MainWindow extends EventEmitter {
  constructor() {
    super();

    this.window = new BrowserWindow({
      width: 800,
      height: 600
    });

    // Load the html file
    let indexFile = 'file://' + path.resolve(__dirname, '../browser/index.html');
    this.window.loadUrl(indexFile);

    // Send close event
    this.window.on('closed', () => {
      this.emit.apply(this, arguments);
    });

    // Create context menu
    this.menu = Menu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          {
            label: 'Exit',
            accelerator: 'CommandOrControl+q',
            click() {
              app.quit();
            }
          }
        ]
      },
      {
        label: 'Tools',
        submenu: [
          {
            label: 'Open Dev Tools',
            click: () => {
              this.window.openDevTools();
            }
          }
        ]
      }
    ]);
    Menu.setApplicationMenu(this.menu);
  }
}

export default MainWindow;

