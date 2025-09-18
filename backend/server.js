const app = require("./src/app");
require('dotenv').config();
const PORT = 8040;
const secretKey = process.env.GEMINI_API_KEY;

app.get('/', (req, res)=>{
     res.end("server ended");
})

app.listen(PORT, () => {
  console.log(`server start port; ${PORT}`);
});
