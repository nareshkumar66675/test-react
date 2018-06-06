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
            <TableTest tabData={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
