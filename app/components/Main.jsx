var React = require('react');
var Navbar = require('Navbar');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Navbar/>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  )
}
module.exports = Main;
