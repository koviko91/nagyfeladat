const host = 'localhost';
const port = 27017;
const user = 'oliver';
const password = 'qwer1234';
const database = 'todolist';

const options = {
  connectTimeoutMS: 2000,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 100, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
};

const uri = `mongodb://${user}:${password}@${host}:${port}/${database}`;

module.exports = {
  uri,
  options,
};
