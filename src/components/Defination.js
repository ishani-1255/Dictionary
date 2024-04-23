import {useEffect, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NoFound from '../components/NotFound';
import DefinationSearch from '../components/DefinationSearch'

export default function Defination(){
    const [word , setWord] = useState('');
    const navigate = useNavigate();
    const [error , setError] = useState(false);
    const [NotFound , setNotFound] = useState(false);
    let {search} = useParams();
        useEffect(()=>{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
        .then((response) => {
            if(response.status === 404){
            // navigate('/404');
            setNotFound(true);
            }else if(response.status === 401){
                navigate('/login');
            }

            if(!response.ok){
                setError(true);
                throw new Error('Something Went Worng');
            }
            return response.json()
        })



        .then((data) =>{
            if (data && data.length > 0) {
            setWord(data[0].meanings);
        } else {
            setNotFound(true);
        }

    })
    .catch((e)=>{
        console.log(e.message);
    });
    },[]); //we want to execute it once , so empty depency array
if(NotFound === true){
    return (
        <>
            <NoFound/>
            <Link to ='/dictionary'>Search Another Word</Link>
        </>);
}

if(error === true){
    return (
        <>
            <p> Something Went Wrong</p>
            <Link to ='/dictionary'>Search Another Word</Link>
        </>);
}

return(
<>
    
    { word ? 
    <>
    <h2 className='text-4xl py-4'>Here is the defination.</h2>
    {word.map((meaning) => {
        return( <p key= {uuidv4} className='py-2'>
            {meaning.partOfSpeech + ": "} 
             {meaning.definitions[0].definition}</p>
        );
    })}
    <p className='pt-2 text-3xl'> Search Again :</p>
    <DefinationSearch/>
    </>
    :
    null

    }
    

</>
)
}