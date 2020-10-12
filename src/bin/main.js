/**
 * Main Run Modules
 */
import app from '../app';
const PORT = process.env.HOST_PORT;
console.log(process.env.HOST_PORT);
app.listen(PORT,() => {
  console.log(`App Server Listen Port http://localhost:${PORT}`);
});