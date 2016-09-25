'use strict';

const React = require('react');

/**
 * The button constant.
 */
const BUTTON = 'button';

/**
 * Component for a button with text.
 */
class TextButton extends React.Component {

  /**
   * By default should not need to to re-render itself.
   *
   * @returns {Boolean} Always false.
   */
  shouldComponentUpdate() {
    return false;
  }

  /**
   * Render the button.
   *
   * @returns {Component} The button component.
   */
  render() {
    return (
      <button
        className={this.props.className}
        type={BUTTON}
        onClick={this.props.clickHandler}>
        {this.props.text}
      </button>
    );
  }
}

TextButton.displayName = 'TextButton';

TextButton.propTypes = {
  text: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired,
  className: React.PropTypes.string
};

module.exports = TextButton;
