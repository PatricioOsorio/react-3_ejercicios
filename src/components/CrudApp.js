import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Swal from 'sweetalert2';

const initialDb = [
  {
    id: 1,
    name: 'Linkin Park',
    genre: 'Nu-metal',
  },
  {
    id: 2,
    name: 'Qbo',
    genre: 'Nu-metal',
  },
  {
    id: 3,
    name: 'Eminem',
    genre: 'Rap',
  },
  {
    id: 4,
    name: 'Metallica',
    genre: 'Thrash metal',
  },
  {
    id: 5,
    name: 'Dread Mar I',
    genre: 'Reggae',
  },
];

export default function CrudApp() {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null); // Cuando sea null es insercion, cuando tenga datos es actualizacion

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    Swal.fire({
      title: '¿Estas seguro?',
      html:
        `Se eliminara el elemento con id: <span class="text-danger">${id}</span>, <br/>` +
        `no podrás revertir esto`,
      icon: 'warning',
      iconColor: 'var(--bs-danger)',
      showCancelButton: true,
      confirmButtonColor: 'var(--bs-danger)',
      cancelButtonColor: 'var(--bs-secondary)',
      confirmButtonText: 'Sí, ¡borrar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        let newData = db.filter((el) => el.id !== id);

        setDb(newData);
      } else {
        return;
      }
    });
  };

  return (
    <>
      <h2 className="display-4 pb-3 fw-normal text-center">Crud App</h2>

      <div className="col-lg-6">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      </div>

      <div className="col-lg-6">
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </div>
    </>
  );
}
