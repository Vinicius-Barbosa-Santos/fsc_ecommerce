import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'

// Components
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/Custom-input'
import { Header } from '../../components/Header'
import InputErrorMessage from '../../components/InputErrorMessage'

// Styles
import {
    LoginContainer,
    LoginContent,
    LoginHeadline,
    LoginInputContainer,
    LoginSubtitle
} from './styles'

import {
    AuthError,
    AuthErrorCodes,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth'
import { UserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db, googleProvider } from '../../config/firebase.config'

interface LoginForm {
    email: string
    password: string
}

export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<LoginForm>()

    const { isAuthenticated } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [isAuthenticated, navigate])

    const handleSubmitPress = async (data: LoginForm) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            console.log({ userCredentials })
        } catch (error) {
            const _error = error as AuthError

            if (_error.code === AuthErrorCodes.INVALID_PASSWORD) {
                return setError('password', { type: 'mismatch' })
            }

            if (_error.code === AuthErrorCodes.USER_DELETED) {
                return setError('email', { type: 'notFound' })
            }

            alert('E-mail ou Senha inválida!')
        }
    }

    const handleSignInWithGooglePress = async () => {
        try {
            const userCredentials = await signInWithPopup(auth, googleProvider)

            const querySnapshot = await getDocs(
                query(
                    collection(db, 'users'),
                    where('id', '==', userCredentials.user.uid)
                )
            )

            const user = querySnapshot.docs[0]?.data()

            if (!user) {
                const firstName = userCredentials.user.displayName?.split(' ')[0]
                const lastName = userCredentials.user.displayName?.split(' ')[1]

                await addDoc(collection(db, 'users'), {
                    id: userCredentials.user.uid,
                    email: userCredentials.user.email,
                    firstName,
                    lastName,
                    provider: 'google'
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton onClick={handleSignInWithGooglePress} startIcon={<BsGoogle size={18} />}>
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

                        {errors?.email?.type === 'notFound' && (
                            <InputErrorMessage>
                                O e-mail não foi encontrado.
                            </InputErrorMessage>
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

                        {errors?.password?.type === 'mismatch' && (
                            <InputErrorMessage>A senha é inválida.</InputErrorMessage>
                        )}
                    </LoginInputContainer>

                    <CustomButton
                        startIcon={<FiLogIn size={18} />}
                        onClick={() => handleSubmit(handleSubmitPress)()}>
                        Entrar
                    </CustomButton>
                </LoginContent>
            </LoginContainer>
        </>
    )
}