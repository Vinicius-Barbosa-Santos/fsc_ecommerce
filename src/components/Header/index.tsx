import { BsCart3 } from 'react-icons/bs'
import {
    HeaderContainer,
    HeaderItems,
    HeaderItem,
    HeaderTitle
} from './styles'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase.config'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'

export const Header = () => {

    const navigate = useNavigate()

    const { isAuthenticated } = useContext(UserContext)
    const { toggleCart } = useContext(CartContext)

    const handleHomePage = () => {
        navigate('/')
    }

    const handleExplorerPage = () => {
        navigate('/explorer')
    }

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleSignUpClick = () => {
        navigate('/sign-up')
    }

    return (
        <HeaderContainer>
            <HeaderTitle onClick={handleHomePage}>CLUB CLOTHING</HeaderTitle>

            <HeaderItems>
                <HeaderItem onClick={handleExplorerPage}> Explorar</HeaderItem>
                {!isAuthenticated && (
                    <>
                        <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                        <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
                    </>
                )}
                <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
                <HeaderItem onClick={toggleCart}>
                    <BsCart3 size={25} />
                    <p style={{ marginLeft: 5 }}>5</p>
                </HeaderItem>
            </HeaderItems>
        </HeaderContainer>
    )
}