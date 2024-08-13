import { useContext, useEffect } from "react"

// Components
import CategoryItem from "../Category-item"

// Styles
import { CategoriesContainer, CategoriesContent } from './styles'

import { CategoryContext } from "../../contexts/CategoryContext"

export const Categories = () => {

    const {categories, fetchCategories} = useContext(CategoryContext)

    useEffect(() => {
        fetchCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <CategoriesContainer>
            <CategoriesContent>
                {categories.map((category) => (
                    <div key={category.id}>
                        <CategoryItem category={category} />
                    </div>
                ))}
            </CategoriesContent>
        </CategoriesContainer>
    )
}