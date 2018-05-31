import React from "react";
import ReactDOM from "react-dom";

// const Index = () => {
//   return <div>Hello React!</div>;
// };

class AddStudent extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      name:"",
      subject:""
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubjectChange = this.handleSubjectChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleNameChange(e){
    this.setState({
      name:e.target.value
    })
  }

  handleSubjectChange(e){
    this.setState({
      subject:e.target.value
    })
  }

  handleAdd(){
    var result={};
    result.id=Date.now();
    result.name= this.state.name;
    result.subject = this.state.subject;

    // this.setState({
    //   name:"",
    //   subject:""
    // })
    this.state.name="";
    this.state.subject="";
    this.props.handleAdd(result);
  }

  render(){
    return(<div className="row py-1">
        <div className="col-3"> 
        Name: <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
        </div>
        <div className="col-3"> 
        Subject: <input type="text" value={this.state.subject} onChange={this.handleSubjectChange}/>
        </div>
        <div className="col-1"> 
        <button className="btn btn-secondary btn-block"  onClick={this.handleAdd}>Add</button>
        </div>
      </div>)
  }
}

class TableComp extends React.Component{
  
  constructor(props) {
    super(props)

    this.state = {
      count:5,
      data:[]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  componentDidMount(){
    fetch("http://localhost:9011/rest/students/")
      .then(results=>{
        return results.json();
      }).then(rslt=>{
        this.setState({
          data:rslt
        })
      })
  }
  handleChange(e) {
    this.setState({
      count: e.target.value
    })
  }
  handleAdd(rslt) {
    var tempData = this.state.data;
    tempData.push(rslt)
    this.setState({
      count: tempData
    })
  }
  render(){
    return(<div className="container">
      <div className="row  py-1">
      <div className="col-2">Record Count: </div>
      <div className="col-4"><input type="text" value={this.state.data.length} onChange={this.handleChange} /></div>
      </div>
        <AddStudent handleAdd={this.handleAdd}/>
      <div className="row  py-1">
        <div className="col-8">
          <TableTest tabData={this.state.data}/>
        </div>
      </div>
      </div>

    )
  }
}

class TableTest extends React.Component{
  render(){
    var rows = [];
    for (var i = 0; i < this.props.tabData.length; i++) {
      rows.push(<Record key={i} val={this.props.tabData[i]} />);
    }
    return (<table className="table table-bordered">
      <thead className="thead-light">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Subject</th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>)
  }
}

class Record extends React.Component{
  render(){
    return (<tr>
      <td>{this.props.val.id}</td>
      <td>{this.props.val.name}</td>
      <td>{this.props.val.subject}</td>
    </tr>);
    
  }
}

class HelloUser extends React.Component {
  render() {
    return (
      <div> Hello, {this.props.name}</div>
    )
  }
}

ReactDOM.render(<TableComp/>, document.getElementById('index'));

// ReactDOM.render(<TableTest/>, document.getElementById("index"));