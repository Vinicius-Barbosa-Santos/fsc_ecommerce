import { useEffect, useState } from "react"
import { Category } from "../../types/category.types"
import axios from "axios"
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
        <div className="categories-container">
            <div className="categories-content">

            </div>
        </div>
    )
}