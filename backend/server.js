const app = require("./src/app");
const PORT = 8040;

app.get('/', (req, res)=>{
     res.end("server ended");
})

app.listen(PORT, () => {
  console.log(`server start port; ${PORT}`);
});
