const React = require('react');

const Img = React.createClass({

  getDefaultProps () {
    return {
      src: ''
    };
  },

  render () {
    const props = this.props;
    return (
      <div className='pr-img'>
        <div className='pr-img__cover'></div>
        <img src={props.src} />
      </div>
    );
  }
});

module.exports = Img;