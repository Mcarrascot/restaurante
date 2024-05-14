import { Row, Col, Image, Container } from 'react-bootstrap';
import SectionTitle from '../SectionTitle';

const SobreNosotrosSeccion = () => {
    return (
        <section className="about-us py-5" id='about' style={{
            backgroundColor: '#bf1833',
            textShadow: '0 0 2px black',
            color: 'white'
        }}>
            <Container>
                <SectionTitle title='Sobre nosotros' />

                <Row className="align-items-center pb-3" >
                    <Col md={6}>
                        <Image fluid rounded src="public\assets\about.png" alt="About Us Image" style={{
                            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                        }} />
                    </Col>
                    <Col md={6} >
                        <h3>¡Bienvenido a Los Pollos Hermanos!</h3>
                        <br />
                        <p>En Los Pollos Hermanos, nos dedicamos a llevar a tu mesa la mejor experiencia culinaria del suroeste estadounidense. Fundado por los hermanos Walter y Gustavo White, nuestro restaurante se ha convertido en un referente gastronómico gracias a nuestro compromiso con la calidad y la excelencia en cada plato que servimos.</p>
                        <br />
                        <p>Te invitamos a descubrir por qué Los Pollos Hermanos es mucho más que un simple restaurante. ¡Esperamos verte pronto y compartir contigo una experiencia gastronómica inolvidable!</p>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                    <Col >
                        <iframe
                            style={{ border: 0, borderRadius: '8px', width: '100%', height: '450px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}
                            src="https://www.youtube.com/embed/2rn9cuNIcQM"
                            allowfullscreen
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SobreNosotrosSeccion;
