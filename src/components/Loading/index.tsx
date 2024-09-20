import { FunctionComponent } from "react"
import { LoadingContainer } from "./styles"
import SyncLoader from 'react-spinners/SyncLoader'

interface LoadingProps {
    message?: string
}

export const Loading: FunctionComponent<LoadingProps> = ({ message }) => {
    return (
        <LoadingContainer>
            {message && <p>{message}</p>}
            <SyncLoader size={30} />
        </LoadingContainer>
    )
}