import { useState } from "react";
import axios from 'axios';

function Quotes(){

    const [quote , setQuote] = useState('');
    const [author , setAuthor] = useState('');

    const getQuote = async()=>{
        const res = await axios.get('http://localhost:4800/?timestamp='+Date.now() ,{
            crossdomain:true
        });
        setQuote(res.data.text);
        setAuthor(res.data.author);
    }


    return(
        <>
           <h4>{quote}</h4>
           <h6>{ "-" + author}</h6>
           <button onClick={getQuote}>Generate Quote </button>
        </>
    );
}

export default Quotes;