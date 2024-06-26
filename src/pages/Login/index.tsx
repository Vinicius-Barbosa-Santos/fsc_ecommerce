import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'

// Components
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/Custom-input'
import InputErrorMessage from '../../components/InputErrorMessage'
import { Header } from '../../components/Header'

// Styles
import {
    LoginContainer,
    LoginContent,
    LoginHeadline,
    LoginInputContainer,
    LoginSubtitle
} from './styles'

interface LoginForm {
    email: string
    password: string
}

export const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginForm>()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmitPress = (data: LoginForm) => {
        console.log({ data })
    }

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

                        {errors?.email?.type === 'required' && (
                            <InputErrorMessage>O e-mail é obrigatório.</InputErrorMessage>
                        )}

                        {errors?.email?.type === 'validate' && (
                            <InputErrorMessage>
                                Por favor, insira um e-mail válido.
                            </InputErrorMessage>
                        )}
                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput
                            hasError={!!errors?.password}
                            placeholder="Digite sua senha"
                            type="password"
                            {...register('password', { required: true })}
                        />

                        {errors?.password?.type === 'required' && (
                            <InputErrorMessage>A senha é obrigatória.</InputErrorMessage>
                        )}
                    </LoginInputContainer>

                    <CustomButton onClick={() => handleSubmit(handleSubmitPress)()} startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
    )
}