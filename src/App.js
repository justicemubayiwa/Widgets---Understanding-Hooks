import React, { useState, useEffect } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/DropDown'
import Translate from './components/Translate'
import Route from './components/Route'


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
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                label='Select a color'
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}

export default App
