import React from 'react';
import PropTypes from 'prop-types';

// const Index = () => {
//   return <div>Hello React!</div>;
// };

export default class AddStudent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      subject: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubjectChange(e) {
    this.setState({
      subject: e.target.value,
    });
  }

  handleAdd() {
    const result = {};
    // result.id=Date.now();
    result.name = this.state.name;
    result.subject = this.state.subject;

    // this.setState({
    //   name:"",
    //   subject:""
    // })
    this.state.name = '';
    this.state.subject = '';
    this.props.handleAdd(result);
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-3">
        Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div className="col-3">
        Subject:
        <input type="text" value={this.state.subject} onChange={this.handleSubjectChange} />
        </div>
        <div className="col-1">
          <button className="btn btn-secondary btn-block" onClick={this.handleAdd}>Add</button>
        </div>
      </React.Fragment>);
  }
}

AddStudent.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
