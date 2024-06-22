// Utilities
import { Category } from '../../types/category.types'

// Styles
import './styles.css'

interface CategoryItemProps {
    category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <div
            className="category-item-container"
            style={{ backgroundImage: `url('${category.imageUrl}')` }}>
            <div className="category-name">
                <p>{category.name}</p>
                <p>Explorar</p>
            </div>
        </div>
    )
}

export default CategoryItem