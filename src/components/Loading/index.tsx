import { LoadingContainer } from "./styles"
import SyncLoader from 'react-spinners/SyncLoader'

export const Loading = () => {
    return (
        <LoadingContainer>
            <SyncLoader size={30} />
        </LoadingContainer>
    )
}