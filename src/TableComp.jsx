import React from 'react';
import AddStudent from './AddStudent';
import { TableTest } from './TableTest';

export default class TableComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
  handleDelete(rslt) {
    const id = parseInt(rslt, 10);
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
    // const rawResponse = await fetch('http://localhost:9011/rest/students/add', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(rslt)
    //   });
    //   const content = await rawResponse.json();
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
            <TableTest tabData={this.state.data} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }
}

function popup() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Do You Really want to delete?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>);
}
