import React from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div className="mb-3">
      <h3>Tabla de datos</h3>

      <div className="card">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-borderless table-striped table-hover border">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Genero</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((el) => (
                    <CrudTableRow
                      key={el.id}
                      el={el}
                      setDataToEdit={setDataToEdit}
                      deleteData={deleteData}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>Sin datos</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrudTable;
