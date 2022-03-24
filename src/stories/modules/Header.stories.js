import React, { useState } from 'react'
import logo from '../../../static/images/dit-crest-and-text-white.svg'

export default {
  title: 'Modules/Header',
}

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='js-enabled' style={{ width: '100vw', margin: '-1rem' }}>
      <header className='magna-header'>
        <nav className='container'>
          <a className='magna-header__logo' href='#'>
            <img src={logo} alt='Department for International Trade' />
          </a>
          <ul className='magna-header__extra-links'>
            <li><a href='#'>Dashboard</a></li>
          </ul>
          <div className='magna-header__menu'>
            <button
              className='magna-header__dropdown-button'
              aria-controls='main-menu'
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              Menu
              <span className='magna-header__dropdown-button__icon' />
            </button>
            <div id='main-menu' className='magna-header__dropdown' role='dialog' aria-hidden={!isOpen}>
              <div className='magna-header__greeting'>Hi John</div>
              <ul className='magna-header__menu-items'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Learn to export <span className='tag tag--small'>new</span></a></li>
                <li><a href='#'>Where to export <span className='tag tag--small'>new</span></a></li>
                <li><a href='#'>Make an export plan <span className='tag tag--small'>new</span></a></li>
                <li><a href='#'>Account</a></li>
                <li><a href='#'>Advice</a></li>
                <li><a href='#'>Markets</a></li>
                <li><a href='#'>Services</a></li>
                <li>
                  <button type='button'>Sign out</button>
                </li>
              </ul>
            </div>
            <div className='magna-header__overlay' onClick={() => setIsOpen(false)} />

            <form className='magna-header__search' onSubmit={e => {
              e.preventDefault()
            }}>
              <label htmlFor='magna-search' className='visually-hidden'>Search</label>
              <input type='text' name='q' placeholder='Search' />
              <button>
                <span className='visually-hidden'>Search</span>
              </button>
            </form>

            <ul className='magna-header__nav hide-lg_lt'>
              <li><a href='#'>Learn to export</a></li>
              <li><a href='#'>Where to export</a></li>
              <li><a href='#'>Make an export plan</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <div className='container p-v-l' style={{ height: '120vh' }}>
        <h1 className='h-xl text-blue-deep-20'>Lorem ipsum</h1>

        <p className='text-blue-deep-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci
          amet asperiores atque aut autem
          commodi consequuntur dolores ducimus, ea earum et ex, explicabo id itaque molestiae mollitia nam
          necessitatibus neque, nesciunt nisi odio qui quis quo ratione repellat repudiandae saepe sint soluta suscipit
          tempora ullam vel vitae!</p>
      </div>
    </div>
  )
}
