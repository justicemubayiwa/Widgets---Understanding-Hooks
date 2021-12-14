import React, {useState} from 'react'
import Dropdown from './DropDown'

const options = [
    {
        label: 'Afrikaans',
        value: 'af,'
    },
    {
        label: 'Arabic',
        value: 'ar,'
    },
    {
        label: 'Hindi',
        value: 'hi,'
    },
]

const Translate = (e) => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input 
                        value={text} 
                        onChange={(e)=> setText(e.target.value)}  
                    />
                </div>     
            </div>
            
            <Dropdown
                label="Select A Language" 
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options}
            />
        </div>
    )
}

export default Translate
