import { useEffect, useState } from "react"
import axios from "axios"

// Components
import CategoryItem from "../Category-item"

// Styles
import { CategoriesContainer, CategoriesContent } from './styles'

// Utilities
import { Category } from "../../types/category.types"
import { env } from "../../config/env.config"

export const Categories = () => {

    const [categories, setCategories] = useState<Category[]>([])

    console.log(categories)

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get(`${env.apiUrl}/categories`)

            setCategories(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCategories()
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