var React = require('react');

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
//console.log(Clock.formatSeconds());
//var el = ReactDOM.findDOMNode(clock);
//console.log(el);
module.exports = Clock;
