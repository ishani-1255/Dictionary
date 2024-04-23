import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function DefinationSearch(){
    const [word ,setWord] = useState('');
    const navigate = useNavigate();
   /* useEffect(
        ()=>{
            console.log("State changed" , word );
        }, [word]
    );*/

    return(

        <form className = 'flex space-between space-x-4 mt-5 items-center max-w-[400px]' 
        onSubmit={()=>{
            navigate('/dictionary/' + word);
        }}>
        <input 
        className=' shrink min-w-0 px-2 py-2 rounded-md'
        placeholder=' Enter your word'
        type = 'text' 
        onChange = {(e) =>{
            setWord(e.target.value);
        }}/>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded" >
        Search
        </button>

        </form>

    );
    
}