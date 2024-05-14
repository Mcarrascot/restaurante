import { useState } from 'react';
import { Button } from 'react-bootstrap';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Formulario enviado:', formData);

    // Restablecer los datos del formulario
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="email-form p-3 p-md-4 rounded">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xl-6 form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Tu nombre"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-xl-6 form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Tu correo"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Asunto"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Mensaje"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <Button variant="outline-danger" className="text-center" type="submit">Enviar mensaje</Button>{' '}
      </form>
    </div>
  );
};

export default EmailForm;