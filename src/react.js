'use strict';
//activity adding
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
          <p className="is-size-5 py-1 no-select" key={item}>{item}</p>
        ))}
      </div>
    )
  }
}

// add to do items
class InputToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClearActivities = this.onClearActivities.bind(this);
  }
  handleChange(event) {
    if (event.key === 'Enter') {
      const newItem = event.target.value;
      this.setState(state => {
        const items = state.items.concat(newItem);
        return {
          items,
        }
      });
      event.target.value = '';
    }
  }
  onClearActivities() {
    this.setState({items: []})
  }
  render() {
    return (
      <div>
        <AddItem items={this.state.items}/>
        <input type="text" className="input px-0" placeholder="+ add task"
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

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleCheck(event) {
    const status = event.target.textContent;
    if (status === '☐') {
      event.target.textContent = '✕';
    }
    else {
      event.target.textContent = '☐';
    }
  };
  render() {
    return (
      <div>
        {this.props.items.map((value, index) => (
          <div key={index}>
            <span className="is-size-5 no-select" onClick={this.handleCheck}>☐</span>
            <span className="is-size-5 py-1 no-select"> {value}</span>
          </div>
        ))}
      </div>
    )
  }
}



//render react thingies
let domContainer1 = document.querySelector('#activities');
ReactDOM.render(<InputActivity />, domContainer1);

let domContainer2 = document.querySelector('#todos');
ReactDOM.render(<InputToDo />, domContainer2);

//let domContainer = document.querySelector('#activities_list');
//ReactDOM.render(<AddAct />, domContainer);
