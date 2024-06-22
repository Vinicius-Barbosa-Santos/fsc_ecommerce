import { FunctionComponent, InputHTMLAttributes } from 'react'

// Styles
import { CustomInputContainer } from './styles'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

const CustomInput: FunctionComponent<CustomInputProps> = ({
    hasError,
    ...rest
}) => {
    return <CustomInputContainer hasError={hasError} {...rest} />
}

export default CustomInput