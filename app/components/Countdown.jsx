const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

class Countdown extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus){
            switch (this.state.countdownStatus){
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    }

    componentWillUnmount (){
        console.log('component-countdoown-WillUnmount');
        clearInterval(this.timer);
        this.timer = undefined;
    }

    startTimer (){
        this.timer = setInterval(() => {
            let newCount = this.state.count - 1;
            this.setState({
                count: newCount >=0 ? newCount : 0
            });
            if( newCount === 0 ){
                this.setState({countdownStatus: 'stopped'});
            }
        }, 1000);
    }

    isNumeric(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }

    handleStatusChange = (newStatus) => {
        this.setState({
            countdownStatus: newStatus
        });
    };

    handleStartCountdown = (newStatus) => {
        this.setState({
            countdownStatus: newStatus
        });
    };

    handleInputNumber = (seconds) => {
        this.setState({
            count: seconds
        });
    };

    render (){
        const {count, countdownStatus} = this.state;
        const renderControlArea = () => {
            if(countdownStatus !== 'stopped'){ //started, paused
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else { //stopped
                return <CountdownForm checkNumber={this.isNumeric} onInputNumber={this.handleInputNumber} onStartCountdown={this.handleStartCountdown}/>
            }
        };
        return (
            <div>
                <h1 className='page-title'>Countdown App</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        )
    }
}

module.exports = Countdown;