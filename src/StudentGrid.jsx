import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

class StudentGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val: ' ',
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={
          {
            width: '620px',
          }
        }
      >
        <AgGridReact
          gridAutoHeight
          enableSorting
          columnDefs={this.props.columnDefs}
          rowData={this.props.rowData} 
        />
      </div>
    );
  }
}

export default StudentGrid;
