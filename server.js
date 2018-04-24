// modules for server
const path = require('path');
const express = require('express');

// server configurations
const serverConfigs = require('./config/serverConfig');

// initialize express
const app = express();

require('./backend/express')(app, serverConfigs);

// fire up the server
app.listen(serverConfigs.PORT, (error) => {
  if (error) throw error;
  console.log('Server running on port: ' + serverConfigs.PORT);
});
