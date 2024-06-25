import { ReactNode } from 'react'

// Styles
import { InputErrorMessageContainer } from './styles'

interface InputErrorMessageProps {
    children: ReactNode
}

const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
    return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
}

export default InputErrorMessage