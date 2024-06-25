import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'

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

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmitPress = (data: any) => {
        console.log({ data })
    }

    console.log({ errors })

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
                        <CustomInput
                            hasError={!!errors?.email}
                            placeholder="Digite seu e-mail"
                            {...register('email', {
                                required: true,
                                validate: (value) => {
                                    return validator.isEmail(value)
                                }
                            })}
                        />
                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            hasError={!!errors?.password}
                            placeholder="Digite sua senha"
                            type="password"
                            {...register('password', { required: true })}
                        />
                    </LoginInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18} onClick={() => handleSubmit(handleSubmitPress)()} />}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
    )
}