const { config } = require('./config');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, (err) => {
  if (err) {
    console.error('Error: ', err);
  } else {
    console.log('applicacion corriendo en el puerto', config.port);
  }
});
