import React from 'react';
import PropTypes from 'prop-types';
import Record from './Record';

export default function TableTest({ tabData }) {
  const rows = [];
  for (let i = 0; i < tabData.length; i++) {
    rows.push(<Record key={i} val={tabData[i]} />);
  }
  return (
    <table className="table table-bordered">
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
    </table>
  );
}
TableTest.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.number.string,
    subject: PropTypes.number.string,
  })).isRequired,
};
