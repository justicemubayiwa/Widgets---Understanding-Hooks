import React, { Component } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/DropDown'

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

export default class App extends Component {

    render() {
        return (
            <div>
                <Dropdown options={options}/>
            </div>
        )
    }
}
