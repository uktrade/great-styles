require('../Reveal')
const { default: userEvent } = require('@testing-library/user-event')

describe('Reveal', () => {
  describe('as a single instance', () => {
    beforeEach(async () => {
      document.body.innerHTML = `
            <button id='toggle' data-reveal-button aria-controls='content'>Toggle content 1</button>
            <div id='content'>Content 1</div>
            <button id='toggle2' data-reveal-button aria-controls='content2'>Toggle content 2</button>
            <div id='content2'>Content 2</div>
        `
      window.document.dispatchEvent(
        new Event('DOMContentLoaded', {
          bubbles: true,
          cancelable: true,
        }),
      )
    })

    it('sets up the components', () => {
      expect(
        document.getElementById('toggle').getAttribute('aria-expanded'),
      ).toEqual('false')
      expect(
        document.getElementById('content').getAttribute('aria-hidden'),
      ).toEqual('true')
    })

    it('expands the linked content on click', () => {
      const button = document.getElementById('toggle')
      const content = document.getElementById('content')

      button.click()

      expect(button.getAttribute('aria-expanded')).toEqual('true')
      expect(content.getAttribute('aria-hidden')).toEqual('false')
      expect(
        document.getElementById('toggle2').getAttribute('aria-expanded'),
      ).toEqual('false')
      expect(
        document.getElementById('content2').getAttribute('aria-hidden'),
      ).toEqual('true')
    })

    it('closes the linked content when clicking again', () => {
      const button = document.getElementById('toggle')
      const content = document.getElementById('content')

      button.click()

      expect(button.getAttribute('aria-expanded')).toEqual('true')
      expect(content.getAttribute('aria-hidden')).toEqual('false')

      button.click()

      expect(button.getAttribute('aria-expanded')).toEqual('false')
      expect(content.getAttribute('aria-hidden')).toEqual('true')
    })
  })

  describe('as a modal', () => {
    beforeEach(() => {
      document.body.innerHTML = `
            <button id='toggle' data-reveal-button data-reveal-modal aria-controls='content'>Toggle</button>
            <div id='content'>
              Content
              <button id='content-button'>Button</button>
            </div>
            <div id='not-content'>Not content</div>
        `
      window.document.dispatchEvent(
        new Event('DOMContentLoaded', {
          bubbles: true,
          cancelable: true,
        }),
      )
    })

    it('closes on pressing escape', () => {
      const button = document.getElementById('toggle')

      button.click()

      expect(button.getAttribute('aria-expanded')).toEqual('true')

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))

      expect(button.getAttribute('aria-expanded')).toEqual('false')
    })

    it('closes when clicking outside the content', () => {
      const button = document.getElementById('toggle')

      button.click()

      expect(button.getAttribute('aria-expanded')).toEqual('true')

      document.getElementById('not-content').click()

      expect(button.getAttribute('aria-expanded')).toEqual('false')
    })

    it('does not close when clicking inside the content', () => {
      const button = document.getElementById('toggle')

      button.click()

      expect(button.getAttribute('aria-expanded')).toEqual('true')

      document.getElementById('content-button').click()

      expect(button.getAttribute('aria-expanded')).toEqual('true')
    })

    it('traps focus within content and trigger', () => {
      document.body.innerHTML = `
            <a href='#'>A link outside content</a>
            <button id='toggle' data-reveal-button data-reveal-modal aria-controls='content'>Toggle</button>
            <a href='#'>Another link outside content</a>
            <div id='content'>
              Content
              <button id='content-button'>Button</button>
              <a href='#'>Link</a>
            </div>
            <a href='#'>Yet another link outside content</a>
        `
      window.document.dispatchEvent(
        new Event('DOMContentLoaded', {
          bubbles: true,
          cancelable: true,
        }),
      )

      const button = document.getElementById('toggle')

      button.focus()
      button.click() // open

      expect(document.activeElement.textContent).toBe('Toggle')

      userEvent.tab()

      expect(document.activeElement.textContent).toBe('Button')

      userEvent.tab()

      expect(document.activeElement.textContent).toBe('Link')

      userEvent.tab()

      expect(document.activeElement.textContent).toBe('Toggle')

      userEvent.tab({ shift: true })

      expect(document.activeElement.textContent).toBe('Link')
    })
  })

  describe('as tabs', () => {
    beforeEach(async () => {
      document.body.innerHTML = `
            <button id='toggle1' data-reveal-button data-reveal-tabs='tabs-1' aria-controls='content1'>Toggle content 1</button>
            <button id='toggle2' data-reveal-button data-reveal-tabs='tabs-1' aria-controls='content2'>Toggle content 2</button>
            <div id='content1'>Content 1</div>
            <div id='content2'>Content 2</div>
            <button id='toggle3' data-reveal-button aria-controls='content3'>Toggle content 3</button>
            <div id='content3'>Content 2</div>
        `
      window.document.dispatchEvent(
        new Event('DOMContentLoaded', {
          bubbles: true,
          cancelable: true,
        }),
      )
    })

    it('starts with first tab shown', () => {
      const tab1 = document.getElementById('toggle1')

      expect(tab1.getAttribute('aria-expanded')).toEqual('true')
    })

    it('does no close when clicking the tab button again', () => {
      const tab1 = document.getElementById('toggle1')

      expect(tab1.getAttribute('aria-expanded')).toEqual('true')

      tab1.click()

      expect(tab1.getAttribute('aria-expanded')).toEqual('true')
    })

    it('closes other linked Reveals when opening', () => {
      const tab1 = document.getElementById('toggle1')
      const tab2 = document.getElementById('toggle2')
      const tab3 = document.getElementById('toggle3')

      tab3.click()

      // Content 1 is open
      expect(tab1.getAttribute('aria-expanded')).toEqual('true')
      // Content 2 is closed
      expect(tab2.getAttribute('aria-expanded')).toEqual('false')
      // Content 3 is open
      expect(tab3.getAttribute('aria-expanded')).toEqual('true')

      tab2.click()

      // Content 1 is now closed
      expect(tab1.getAttribute('aria-expanded')).toEqual('false')
      // Content 2 is now open
      expect(tab2.getAttribute('aria-expanded')).toEqual('true')
      // Content 3 is still open
      expect(tab3.getAttribute('aria-expanded')).toEqual('true')
    })
  })
})
