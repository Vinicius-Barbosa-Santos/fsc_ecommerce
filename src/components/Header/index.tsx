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

    const handleHomePage = () => {
        navigate('/')
    }

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleSignUpPage = () => {
        navigate('/sign-up')
    }

    return (
        <HeaderContainer>
            <HeaderTitle>CLUB CLOTHING</HeaderTitle>

            <HeaderItems>
                <HeaderItem onClick={handleHomePage}> Explorar</HeaderItem>
                <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                <HeaderItem onClick={handleSignUpPage}>Criar Conta</HeaderItem>
                <HeaderItem>
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}