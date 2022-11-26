import React, { useEffect, useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Swal from 'sweetalert2';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';

export default function CrudApi() {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null); // Cuando sea null es insercion, cuando tenga datos es actualizacion
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  let api = helpHttp();
  let url = 'http://localhost:5001/bands';

  useEffect(() => {
    setLoading(true);

    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    api.post(url, options).then((res) => {
      // console.log(res);

      // Si no hay error
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };

    // console.log(endpoint);

    api.put(endpoint, options).then((res) => {
      // console.log(res);

      // Si no hay error
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
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
        let endpoint = `${url}/${id}`;

        let options = {
          headers: { 'content-type': 'application/json' },
        };

        api.del(endpoint, options).then((res) => {
          // Si no hay error
          if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          }
        });
      } else {
        return;
      }
    });
  };

  return (
    <>
      <h2 className="display-4 pb-3 fw-normal text-center">Crud Api</h2>

      <div className="col-lg-6">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      </div>

      <div className="col-lg-6">
        {loading && <Loader />}

        {error && (
          <Message
            text={`Ocurrió un error ${error.status}: ${error.statusText}`}
            color="danger"
            icon="danger"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </div>
    </>
  );
}
