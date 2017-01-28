var React = require('react');

class Clock extends React.Component{

    formatSeconds(totalSeconds){
        let seconds = totalSeconds % 60;
        if (seconds < 10 ) seconds = '0' + seconds;
        let minutes = Math.floor(totalSeconds / 60);
        if (minutes < 10 ) minutes = '0' + minutes;
        return minutes + ':' + seconds;
    }

    render(){
        const {totalSeconds} = this.props;
        return (
            <div className="clock">
                <span className="clock-text">
                  {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        )
    }
}

Clock.defaultProps = {
    totalSeconds: 0
};

Clock.propTypes = {
    totalSeconds: React.PropTypes.number
};

module.exports = Clock;
