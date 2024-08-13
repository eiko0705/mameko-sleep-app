import express from 'express';
const app = express();
const port = process.env.PORT || 5173;

app.get('/test', async (req, res) => {
  res.send('Hello World!');
});

(async () => {
  try {
    console.log('Starting express...');
    app.listen(port, () => {
      console.log(`🎉 Server running at https://localhost:${port}!`);
    });
  } catch (err) {
    console.error('Error starting app!', err);
    process.exit(-1);
  }
})();