import React from 'react';
import PropTypes from 'prop-types';

export default function StudentTable({ tabData, handleDelete }) {
  const rows = [];
  for (let i = 0; i < tabData.length; i++) {
    rows.push(<Record key={i} val={tabData[i]} handleDelete={handleDelete} />);
  }
  return (
    <table className="table table-bordered">
      <thead className="thead-light">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Subject</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
StudentTable.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.number.string,
    subject: PropTypes.number.string,
  })).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

function Record({ val, handleDelete }) {
  const alignCenter = {
    textAlign: 'center',
  };
  return (
    <tr>
      <td>{val.id}</td>
      <td>{val.name}</td>
      <td>{val.subject}</td>
      <td style={alignCenter} >
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={() => handleDelete(val.id)}
        >
          <i className="fas fa-times" />
        </button>
      </td>
    </tr>);
}

Record.propTypes = {
  val: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.number.string,
    subject: PropTypes.number.string,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export { StudentTable, Record };
