console.log('Starting App');

// Log messages from child webviews
Array.from(document.getElementsByTagName('webview')).forEach(function(webview) {
  webview.addEventListener('console-message', function(e) {
    console.log('Webview logged:', e.message);
  });
});

