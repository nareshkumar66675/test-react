import React from 'react';
import AddStudent from './AddStudent';
import { StudentTable } from './StudentTable';
import Popup from './Popup';

export default class StudentApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
      data: [],
      deleteId: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:9011/rest/students/')
      .then((results) => {
        if (!results.ok) {
          throw Error(results.statusText);
        }
        return results.json();
      }).then((rslt) => {
        this.setState({
          data: rslt,
        });
      }).catch(error => console.log(error));
  }
  handleDelete() {
    const id = parseInt(this.state.deleteId, 10);
    const tempData = this.state.data.filter(stud => stud.id !== id);
    fetch(`http://localhost:9011/rest/students/delete/${id}`, {
      method: 'get',
    }).then(() => {

    }).then(() => {
      this.setState({
        data: tempData,
      });
    }).catch((err) => { console.log(err); });
  }
  handleChange(e) {
    this.setState({
      count: e.target.value,
    });
  }
  handleAdd(rslt) {
    const tempData = this.state.data;

    fetch('http://localhost:9011/rest/students/add', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(rslt),
    }).then((response) => {
      return response.text();
    }).then((result) => {
      console.log(result);
      rslt.id = parseInt(result, 10);
      tempData.push(rslt);
      this.setState({
        data: tempData,
      });
    }).catch((err) => { console.log(err); });
  }

  deleteEvent(rslt) {
    this.setState({
      deleteId: rslt,
    });
    this.popRef.toggle();
  }

  render() {
    return (
      <div className="container">
        <div className="row py-1">
          <div className="col-2">Record Count: </div>
          <div className="col-4">
            <input
              type="text"
              className="py-1"
              value={this.state.data.length}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row py-1">
          <AddStudent handleAdd={this.handleAdd} />
        </div>
        <div className="row py-1">
          <div className="col-8">
            <StudentTable tabData={this.state.data} handleDelete={this.deleteEvent} />
          </div>
        </div>
        <Popup
          ref={(instance) => { this.popRef = instance; }}
          title="Confirm"
          body="Do you want to delete?"
          handleOk={this.handleDelete}
        />
      </div>
    );
  }
}
