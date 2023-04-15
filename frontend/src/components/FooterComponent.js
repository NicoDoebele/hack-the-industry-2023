import './../styles/footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function FooterComponent(){
    return(
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='logo' href="#home">Hackathon SS 2023</Navbar.Brand>
          <Nav className="justify-content-end">
              <div className="names">
                <h4>Members:</h4>
                <ul className='ul'>
                    <p>Marios Tzialidis</p>
                    <p>Jianbang Zhuang</p>
                </ul>
                <ul className='ul'>
                    <p>Nico Döbele</p>
                    <p>Robin Fink</p>
                </ul>
                <ul className='ul'>
                     <p>Cem Bertram</p>
                </ul>
                
            </div>
          </Nav>
      </Container>
    </Navbar>
     
 

    );
}