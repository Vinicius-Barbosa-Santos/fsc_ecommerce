import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

// Components
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/Custom-input'
import { Header } from '../../components/Header'

// Styles
import {
    LoginContainer,
    LoginContent,
    LoginHeadline,
    LoginInputContainer,
    LoginSubtitle
} from './styles'

export const LoginPage = () => {
    return (
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton startIcon={<BsGoogle size={18} />}>
                        Entrar com o Google
                    </CustomButton>

                    <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput placeholder="Digite seu e-mail" />
                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput placeholder="Digite sua senha" />
                    </LoginInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
    )
}