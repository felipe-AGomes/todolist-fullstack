/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/Status.css';

function Status({ updateStatus, stat }) {
  return (
    <td>
      <select value={stat} onChange={updateStatus}>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluido">Concluido</option>
      </select>
    </td>
  );
}

export default Status;
