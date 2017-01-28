const React = require('react');
const {Link, IndexLink} = require('react-router');

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div className='top-bar'>
                    <div className='top-bar-left'>
                        <ul className="menu">
                            <li className='menu-text'>
                                React Timer App
                            </li>
                            <li>
                                <IndexLink to='' activeClassName='active-link'>Timer</IndexLink>
                            </li>
                            <li>
                                <Link to='/Countdown' activeClassName='active-link'>Countdown</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='top-bar-right'>
                        <lu className='menu'>
                            <li className='menu-text'>
                                Created by <a href="">EvGeniy</a>
                            </li>
                        </lu>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Navbar;
