'use strict';

import {EventEmitter} from 'events';
import path from 'path';

import BrowserWindow from 'browser-window';

class MainWindow extends EventEmitter {
  constructor() {
    super();

    this.window = new BrowserWindow({
      width: 800,
      height: 600
    });

    let indexFile = 'file://' + path.resolve(__dirname, '../browser/index.html');
    this.window.loadUrl(indexFile);

    this.window.on('closed', () => {
      this.emit.apply(this, arguments);
    });
  }
}

export default MainWindow;

