// This is the main code for the plugin that will run within Figma.
// It will open the UI defined in 'ui.html'.
figma.showUI(__html__, { width: 240, height: 320 });

// Handle messages received from the UI
figma.ui.onmessage = msg => {
  if (msg.type === 'save-api') {
    // Save the API key using Figma client storage API
    figma.clientStorage.setAsync('apiKey', msg.apiKey).then(() => {
      figma.closePlugin(`API Key saved: ${msg.apiKey}`);
    });
  }
};
