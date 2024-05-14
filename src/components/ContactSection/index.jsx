import EmailForm from "../EmailForm";
import SectionTitle from "../SectionTitle";

const ContactSection = () => {
  const contactInfo = [
    { icon: 'bi bi-map', title: 'Nuestra ubicación', content: 'Albuquerque (Nuevo México, Estados Unidos)' },
    { icon: 'bi bi-envelope', title: 'Envíanos un correo', content: 'lospolloshermanos@gmail.com' },
    { icon: 'bi bi-telephone', title: 'Llámanos', content: '+569 5589 55488' },
    { icon: 'bi bi-share', title: 'Horario de atención', content: 'Lun-Sab: 11AM - 8PM; Domingo: Cerrado' },
  ];

  return (
    <section id="contáctanos" className="contáctanos py-5" style={{
        backgroundColor: 'antiquewhite'
    }}>
      <div className="container">
        <SectionTitle title='CONTÁCTANOS' />


        <div className="row gy-4">
          {contactInfo.map((item) => (
            <div className="col-md-6" key={item.title}>
              <div className="info-item d-flex align-items-center rounded">
                <i className={`icon ${item.icon}`}></i>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="email-form p-3 p-md-4 rounded">
          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
