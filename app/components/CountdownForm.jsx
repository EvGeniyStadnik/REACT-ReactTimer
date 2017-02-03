const React = require('react');

class CountdownForm extends React.Component{
    constructor (props){
        super(props);
    }

    onStartCountdown = (newStatus) => {
        return () => {
            let seconds = this.refs.seconds.value;
            if(seconds.trim()){
                this.refs.seconds.value = '';
                this.props.onStartCountdown(newStatus);
            }
        }
    };

    onChange = () => {
        let inputValue = this.refs.seconds.value;
        console.log(inputValue);
        let isNumber = this.props.checkNumber(inputValue);
        if ( isNumber ) {
            this.props.onInputNumber(inputValue.trim());
        } else {
            this.refs.seconds.value = inputValue.slice(0, inputValue.length - 1);
            alert('Inter Number');
        }
    };

    render(){
        return (
            <div>
                <form className='countdow-form'>
                    <input type="text" ref="seconds" onChange={this.onChange} placeholder='Enter time in seconds' />
                    <button onClick={this.onStartCountdown('started')} className='button expanded'>Start</button>
                </form>
            </div>
        );
    }
}

module.exports = CountdownForm;