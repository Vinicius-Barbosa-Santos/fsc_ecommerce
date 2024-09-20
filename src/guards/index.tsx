import { ReactNode, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"
import { Header } from "../components/Header"
import { Loading } from "../components/Loading"

interface AuthenticationGuardProps {
    children: ReactNode
}

const AuthenticationGuard = ({ children }: AuthenticationGuardProps) => {
    const { isAuthenticated } = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            setTimeout(() => {
                navigate("/login")
            }, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isAuthenticated) {
        return (
            <>
                <Header />

                <Loading message="Você precisa estar logado para acessar está página. Você será redirecionado para a página de login em instantes..." />
            </>
        )
    }

    return <>{children}</>
}

export default AuthenticationGuard