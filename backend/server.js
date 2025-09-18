const app = require("./src/app");
require('dotenv').config();

const PORT = 8040;

app.get('/', (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
