import express, { Request, Response } from 'express'; 
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
app.use(cors())
app.use(
  bodyParser.json({
    verify: (req:Request, res:Response, buf) => {
      req.body = buf;
    },
  })
);
const port = 8000; 
app.get('/',(req,res)=>{
  res.send('req hit')
})

 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
