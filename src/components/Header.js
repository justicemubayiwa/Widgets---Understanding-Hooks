import React from 'react'
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link page='Accordion' href="/" className='item'>
                Accordion
            </Link>
            <Link page='Search' href="/list" className='item'>
                Search
            </Link>
            <Link page='Dropdown' href="/dropdown" className='item'>
                Dropdown
            </Link>
            <Link page='Translate' href="/translate" className='item'>
                Translate
            </Link>
        </div>
    )
}

export default Header
