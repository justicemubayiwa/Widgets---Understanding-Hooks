import React, { useState, useEffect } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/DropDown'
import Translate from './components/Translate'


const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Where did I learn React?',
        content: 'Udemy'
    },
    {
        title: 'How long is the Udemy React course?',
        content: '52.5 total hours'
    },
]

const options = [
        {
            label: 'The Color Red',
            value: 'red'
        },
        {
            label: 'The Color Green',
            value: 'green'
        },
        {
            label: 'The Color Blue',
            value: 'blue'
        },
]

const App =()=> {

    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)
 
    const showAccordion = () => {
        if (window.location.pathname === '/'){
            return <Accordion items={items} />
        }
    }

    const showList = () => {
        if (window.location.pathname === '/list'){
            return <Search />
        }
    }

    const showingDopdown = () => {
        if (window.location.pathname === '/show'){
            return <Dropdown />
        }
    }

    const showTranslate = () => {
        if (window.location.pathname === '/translate'){
            return <Translate />
        }
    }

    return (
        <div>
            {/* <button onClick={()=> setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown 
                    selected={selected} 
                    options={options}
                    onSelectedChange={setSelected}
                /> : null
            } */}
            {showAccordion()}
            {showList()}
            {showingDopdown()}
            {showTranslate()}
        </div>
    )
}

export default App
