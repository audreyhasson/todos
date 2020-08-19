'use strict';

class InputActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleKeypress(event) {
    if (event.key === 'Enter') {
      AddAct(this.state.value, true);
    }
  }
  render() {
    return (
      <div>
        <input type="text" className="input px-0" placeholder="+ add activity" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeypress} />
      </div>
  );
  }
}

function AddAct(item, shouldrender) {
  console.log('The function was successfully called.');
  console.log(item, shouldrender);
  if (shouldrender === true) {
    return (
      <p>Hello!</p>
    );
  }
  else {
    return (
      <p>fake and toxic</p>
    );
  }
}


//render react thingies
let domContainer = document.querySelector('#activities_input');
ReactDOM.render(<InputActivity />, domContainer);

ReactDOM.render(
  <AddAct />,
  document.getElementById('activities_list')
);
