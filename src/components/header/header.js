import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

function Header(){
    const {login, setLogin} = UserContext(UserContext);
    const navigate = useNavigate();

    const active = true;

    useEffect(() => {
        if (active) {
            navigate('contato')
        } else {
            navigate('fotos')
        }
    }. [])

    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'>
                      <li>Home</li>
                    </Link>
                    <Link to='/fotos'>
                       <li>Fotos</li>
                    </Link>
                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <li onClick={() => navigate('contato')}>login</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;