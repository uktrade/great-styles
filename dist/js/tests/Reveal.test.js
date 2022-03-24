"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('../Reveal');

var _require = require('@testing-library/user-event'),
    userEvent = _require.default;

describe('Reveal', function () {
  beforeEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            document.body.innerHTML = "\n            <button id='toggle' data-reveal-button aria-controls='content'>Toggle content 1</button>\n            <div id='content'>Content 1</div>\n            <button id='toggle2' data-reveal-button aria-controls='content2'>Toggle content 2</button>\n            <div id='content2'>Content 2</div>\n        ";
            window.document.dispatchEvent(new Event('DOMContentLoaded', {
              bubbles: true,
              cancelable: true
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  it('sets up the components', function () {
    expect(document.getElementById('toggle').getAttribute('aria-expanded')).toEqual('false');
    expect(document.getElementById('content').getAttribute('aria-hidden')).toEqual('true');
  });
  it('expands the linked content on click', function () {
    var button = document.getElementById('toggle');
    var content = document.getElementById('content');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    expect(content.getAttribute('aria-hidden')).toEqual('false');
    expect(document.getElementById('toggle2').getAttribute('aria-expanded')).toEqual('false');
    expect(document.getElementById('content2').getAttribute('aria-hidden')).toEqual('true');
  });
});
describe('Reveal modal', function () {
  beforeEach(function () {
    document.body.innerHTML = "\n            <button id='toggle' data-reveal-button data-reveal-modal aria-controls='content'>Toggle</button>\n            <div id='content'>\n              Content\n              <button id='content-button'>Button</button>\n            </div>\n            <div id='not-content'>Not content</div>\n        ";
    window.document.dispatchEvent(new Event('DOMContentLoaded', {
      bubbles: true,
      cancelable: true
    }));
  });
  it('closes on pressing escape', function () {
    var button = document.getElementById('toggle');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    document.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'Escape'
    }));
    expect(button.getAttribute('aria-expanded')).toEqual('false');
  });
  it('closes when clicking outside the content', function () {
    var button = document.getElementById('toggle');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    document.getElementById('not-content').click();
    expect(button.getAttribute('aria-expanded')).toEqual('false');
  });
  it('does not close when clicking inside the content', function () {
    var button = document.getElementById('toggle');
    button.click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
    document.getElementById('content-button').click();
    expect(button.getAttribute('aria-expanded')).toEqual('true');
  });
  it('traps focus within content and trigger', function () {
    document.body.innerHTML = "\n            <a href='#'>A link outside content</a>\n            <button id='toggle' data-reveal-button data-reveal-modal aria-controls='content'>Toggle</button>\n            <a href='#'>Another link outside content</a>\n            <div id='content'>\n              Content\n              <button id='content-button'>Button</button>\n              <a href='#'>Link</a>\n            </div>\n            <a href='#'>Yet another link outside content</a>\n        ";
    window.document.dispatchEvent(new Event('DOMContentLoaded', {
      bubbles: true,
      cancelable: true
    }));
    var button = document.getElementById('toggle');
    button.focus();
    button.click(); // open

    expect(document.activeElement.textContent).toBe('Toggle');
    userEvent.tab();
    expect(document.activeElement.textContent).toBe('Button');
    userEvent.tab();
    expect(document.activeElement.textContent).toBe('Link');
    userEvent.tab();
    expect(document.activeElement.textContent).toBe('Toggle');
    userEvent.tab({
      shift: true
    });
    expect(document.activeElement.textContent).toBe('Link');
  });
});