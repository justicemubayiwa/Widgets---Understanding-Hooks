import React, { Component } from 'react'
import Accordion from './components/Accordion'

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

export default class App extends Component {

    render() {
        return (
            <div>
                <Accordion items={items}/>
            </div>
        )
    }
}
