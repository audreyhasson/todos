'use strict';

class InputActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acts: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClearActivities = this.onClearActivities.bind(this);
  }
  handleChange(event) {
    if (event.key === 'Enter') {
      const newAct = event.target.value;
      this.setState(state => {
        const acts = state.acts.concat(newAct);
        return {
          acts,
        }
      });
      event.target.value = '';
    }
  }
  onClearActivities() {
    this.setState({acts: []})
  }
  render() {
    return (
      <div>
        <AddAct acts={this.state.acts}/>
        <input type="text" className="input px-0" placeholder="+ add activity"
        onKeyPress={this.handleChange}
        />
        <button type="button" className="button my-3"
        onClick={this.onClearActivities}>
        clear
        </button>
      </div>
  );
  }
}

class AddAct extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.acts.map(item => (
          <p className="is-size-5 py-1" key={item}>{item}</p>
        ))}
      </div>
    )
  }
}


//render react thingies
let domContainer = document.querySelector('#activities_input');
ReactDOM.render(<InputActivity />, domContainer);

//let domContainer = document.querySelector('#activities_list');
//ReactDOM.render(<AddAct />, domContainer);
