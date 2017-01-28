const React = require('react');
const Navbar = require('Navbar');

const Main = (props) => {
    return (
        <div>
            <Navbar/>
            <div className='row'>
                <div className='column small-centered medium-6 large-4'>
                    {props.children}
                </div>
            </div>
        </div>
    )
};

module.exports = Main;
