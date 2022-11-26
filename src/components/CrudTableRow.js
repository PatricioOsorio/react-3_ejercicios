import React from 'react';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { id, name, genre } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{genre}</td>
      <td>
        <button
          className="btn btn-warning mx-1"
          onClick={() => setDataToEdit(el)}
        >
          <i className="fa-solid fa-pen me-1"></i>Editar
        </button>
        <button className="btn btn-danger mx-1" onClick={() => deleteData(id)}>
          <i className="fa-solid fa-trash me-1"></i>Borrar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
