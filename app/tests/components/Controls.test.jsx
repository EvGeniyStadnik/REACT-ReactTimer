var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('renderStartStopButton', () => {
    it('should render one button -> Pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
      var el = ReactDOM.findDOMNode(controls);
      var arrButtons = el.querySelectorAll('.secondary, .primary');
      expect(arrButtons.length).toBe(1);
      expect(arrButtons[0].innerText).toBe('Pause')
    });
    it('should render one button -> Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
      var el = ReactDOM.findDOMNode(controls);
      var arrButtons = el.querySelectorAll('.secondary, .primary');
      expect(arrButtons.length).toBe(1);
      expect(arrButtons[0].innerText).toBe('Start')
    });
  });
});
