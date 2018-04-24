const morgan = require('morgan');

const expressConfig = (app, serverConfigs) => {
  if (!serverConfigs.PRODUCTION) {
    require('./dev')(app);
  }
};

module.exports = expressConfig;
