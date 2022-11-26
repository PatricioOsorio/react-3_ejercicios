import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const initialForm = {
  id: null,
  name: '',
  genre: '',
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.genre) {
      Swal.fire({
        title: 'Oops...',
        text: '¡Uno o más campos están vacíos!',
        icon: 'warning',
        iconColor: 'var(--bs-warning)',
        confirmButtonColor: 'var(--bs-primary)',
        confirmButtonText: 'Entiendo',
      });
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className="mb-3">
      <h3>{dataToEdit ? 'Editar' : 'Agregar'}</h3>

      <div className="card">
        <div className="card-body p-lg-4">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Nombre"
                onChange={handleChange}
                value={form.name}
              />
              <label htmlFor="name">Nombre</label>
            </div>

            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="genre"
                name="genre"
                placeholder="Genero"
                onChange={handleChange}
                value={form.genre}
              />
              <label htmlFor="genre">Genero</label>
            </div>

            <button className="btn btn-primary me-1" type="submit">
              <i className="fa-solid fa-paper-plane me-1"></i>
              {dataToEdit ? 'Actualizar' : 'Enviar'}
            </button>

            <button
              className="btn btn-secondary mx-1"
              type="reset"
              onClick={handleReset}
            >
              <i className="fa-solid fa-broom me-1"></i>Limpiar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrudForm;
