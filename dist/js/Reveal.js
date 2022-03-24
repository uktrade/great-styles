"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * Reveal functionality
 *
 * Used to toggle the visibility of a given component using a given trigger.
 * Trigger and target component can be separate in the markup, and are linked
 * using their respective `aria-controls` and `id` attributes.
 *
 * Usage:
 *    <button aria-controls="target" data-reveal-button [data-reveal-modal]>Toggle</button>
 *    <div id="target">Content to reveal</div>
 *
 * CSS should be used to show/hide the content based on the `aria-expanded` and `aria-hidden` attributes.
 *
 * Optional: adding the `data-reveal-modal` attribute to the trigger will treat the content as a modal:
 * - Pressing 'Escape' will close
 * - Clicking anywhere outside the content will close (provide your own overlay with CSS)
 * - Focus will be trapped within content and trigger
 */
var tabbable = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

var Reveal = /*#__PURE__*/function () {
  function Reveal(buttonElement) {
    _classCallCheck(this, Reveal);

    if (!buttonElement) return;
    this.button = buttonElement;
    this.content = document.querySelector("#".concat(buttonElement.getAttribute('aria-controls')));
    this.asModal = buttonElement.getAttribute('data-reveal-modal') !== null;

    if (this.asModal) {
      var contentTabbable = Array.from(this.content.querySelectorAll(tabbable));
      this.firstTabbableElement = contentTabbable[0];
      this.lastTabbableElement = contentTabbable[contentTabbable.length - 1];
    }

    this.toggle = this.toggle.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.close();
    buttonElement.addEventListener('click', this.toggle);
  }

  _createClass(Reveal, [{
    key: "handleKeydown",
    value: function handleKeydown(event) {
      if (this.isOpen()) {
        if (event.key === 'Escape') {
          this.close();
        }

        if (event.key === 'Tab') {
          if (event.target === this.firstTabbableElement && event.shiftKey) {
            event.preventDefault();
            this.button.focus();
          }

          if (event.target === this.lastTabbableElement && !event.shiftKey) {
            event.preventDefault();
            this.button.focus();
          }

          if (event.target === this.button && !event.shiftKey) {
            event.preventDefault();
            this.firstTabbableElement.focus();
          }

          if (event.target === this.button && event.shiftKey) {
            event.preventDefault();
            this.lastTabbableElement.focus();
          }
        }
      }
    }
  }, {
    key: "handleOutsideClick",
    value: function handleOutsideClick(event) {
      if (this.isOpen() && !this.content.contains(event.target) && event.target !== this.button) {
        this.close();
      }
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.button.getAttribute('aria-expanded') === 'true';
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isOpen()) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.button.setAttribute('aria-expanded', 'true');
      this.content.setAttribute('aria-hidden', 'false');

      if (this.asModal) {
        document.addEventListener('keydown', this.handleKeydown);
        document.addEventListener('click', this.handleOutsideClick);
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.button.setAttribute('aria-expanded', 'false');
      this.content.setAttribute('aria-hidden', 'true');

      if (this.asModal) {
        document.removeEventListener('keydown', this.handleKeydown);
        document.removeEventListener('click', this.handleOutsideClick);
      }
    }
  }]);

  return Reveal;
}();

(function () {
  window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-reveal-button]').forEach(function (el) {
      return new Reveal(el);
    });
  });
})();