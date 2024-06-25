import { BsCart3 } from 'react-icons/bs'
import {
    HeaderContainer,
    HeaderItems,
    HeaderItem,
    HeaderTitle
} from './styles'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleHomePage = () => {
        navigate('/')
    }

    return (
        <HeaderContainer>
            <HeaderTitle onClick={handleHomePage}>CLUB CLOTHING</HeaderTitle>

            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}