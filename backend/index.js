import  express from "express";
import cors from 'cors';
import Quote from 'inspirational-quotes';

const PORT = 3800 || 4500;
 
const app = express();
app.use(cors());
app.use(express.json());

app.get('/' , (req , res)=>{
    const data = Quote.getQuote();
    res.send(data);
})

app.listen(PORT , ()=>{ 
    console.log(`server is running at http://localhost:${PORT}`);
})

