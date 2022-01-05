import { Link } from 'react-router-dom'
import { Container } from './style';

function Header() {
    return (
        <Container>
        <header>
            <ul>
                <Link to="/logout">Sair</Link>
            </ul>
        </header>
        </Container>
    );
}

export default Header;
