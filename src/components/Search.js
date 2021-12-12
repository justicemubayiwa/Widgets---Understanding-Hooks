import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search=()=> {
    const [term, setTerm] = useState('')

    useEffect(()=>{
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php')
        }
    })

    return (
        <div className="ui form">
           <div className="field">
               <label>Enter Search Term</label>
               <input onChange={e=> setTerm(e.target.value)} 
                className="input"
                />
           </div>
        </div>
    )
}

export default Search
