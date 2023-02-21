/* eslint-disable react/prop-types */
import React from 'react';

import '../styles/ActionButtom.css';
import { EditIcon, TrashIcon } from './Icons';

function ActionButtom({ deleteTasks, activateEditor }) {
  return (
    <td className="boxButtom">
      <button onClick={activateEditor} type="button">{EditIcon}</button>
      <button onClick={deleteTasks} type="button">{TrashIcon}</button>
    </td>
  );
}

export default ActionButtom;
