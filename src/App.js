import React, { useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/DropDown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'


const items = [
    {
        title: 'Why did I make this application?',
        content: 'This application was built primarily to understand the fundamentals of routing in React prior to learning Redux '
    },
    {
        title: 'My favorite part of this application ',
        content: 'Coming from using vanilla javascript, React has made state mapping much easier by using declarative instead of imperative code. Instead of constantly having to worry about how to hide or show different elements (ex. this accordion toggle) in my HTML, I instead wrote conditionals that get evaluated every time a new action occurred.The automation of the UI update process requires fewer lines of code and in tern I find myself running into fewer bugs relative to Javascript where I would have to manage the DOM myself.  '
    },
    {
        title: 'What will be your next project?',
        content: 'I would like to create a private tutoring website for my brother using the skills I have learned from building personal projects.'
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
            <Header/>
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
