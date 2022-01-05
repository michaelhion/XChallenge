import {Link} from  'react-router-dom'
import { Container } from './style';

function Home() {
    return (
      <Container>
      <h2>Logout efetuado com sucesso!</h2>
      <Link style={{textDecoration: 'none',color:'black',fontWeight:'bold'}} to="/"><p>Clique aqui para retornar ao login</p></Link>
      </Container>
    );
  }
  
  export default Home;
  