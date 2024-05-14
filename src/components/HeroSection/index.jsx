import { Container, Button, Image } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <section id='home' className="bg-primary text-white py-5" style={{
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(public/assets/background-cover.png) center / cover no-repeat fixed',
        marginTop: 'auto',
        height: '100vh',
      }}>
      <Container style={{
            height: '-webkit-fill-available',
            maxWidth: "-webkit-fill-available",
            display: 'inline-grid',
            placeItems: 'center',
            alignContent: 'center',
      }} >
        <Image src="public\assets\logo.png" fluid height={500}/>

        <Button size='lg' style={{
            marginTop: '20px'
            }}
            variant="outline-light" href='#about'>Ver más</Button>{' '}

      </Container>
    </section>
  );
};

export default HeroSection;
