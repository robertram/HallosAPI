// Server Startup
import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Events API available at http://localhost:${port}/api/events`);
});

