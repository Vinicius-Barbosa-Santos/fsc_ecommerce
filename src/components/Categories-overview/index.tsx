import { FunctionComponent, useContext, useEffect } from 'react'

// Styles
import { Container } from './styles'

// Utilities
import { CategoryContext } from '../../contexts/CategoryContext'

// Components
import CategoryOverview from '../Category-overview'
import { Loading } from '../Loading'

const CategoriesOverview: FunctionComponent = () => {
    const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories()
        }
    }, [])

    if (isLoading) return <Loading />

    return (
        <Container>
            {categories.map((category) => (
                <CategoryOverview key={category.id} category={category} />
            ))}
        </Container>
    )
}

export default CategoriesOverview