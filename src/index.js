import React from "react";
import ReactDOM from "react-dom";

// const Index = () => {
//   return <div>Hello React!</div>;
// };


class TableComp extends React.Component{
  
  constructor(props) {
    super(props)

    this.state = {
      count:5,
      data:[]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch("http://localhost:8080/rest/students/")
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
  render(){
    return(<div>
      Record Count:
      <input type="text" value={this.state.count} onChange={this.handleChange}/>
      <TableTest tabData={this.state.data}/>
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
      <tbody>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Subject</th>
      </tr>
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