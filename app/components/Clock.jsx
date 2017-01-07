var React = require('react');
//----------
// var ReactDOM =require('react-dom');
// var TestUtils = require('react-addons-test-utils');
// var CountdownForm = require('CountdownForm');
//countdownForm - объект
// var countdownForm = TestUtils.renderIntoDocument(<CountdownForm/>);
// console.log(countdownForm);
//el DOM елемент
// var el = ReactDOM.findDOMNode(countdownForm);
// console.log(el);
//-----------

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds){
    var seconds = totalSeconds % 60;
    if (seconds < 10 ) seconds = '0' + seconds;
    var minutes = Math.floor(totalSeconds / 60);
    if (minutes < 10 ) minutes = '0' + minutes;
    return minutes + ':' + seconds;
  },
  render: function(){
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
