import React from 'react';
import PropTypes from 'prop-types';

export default function Record({ val }) {
  return (
    <tr>
      <td>{val.id}</td>
      <td>{val.name}</td>
      <td>{val.subject}</td>
    </tr>);
}

Record.propTypes = {
  val: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.number.string,
    subject: PropTypes.number.string,
  }).isRequired,
};
