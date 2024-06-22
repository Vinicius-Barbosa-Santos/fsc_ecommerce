// Utilities
import { Category } from '../../types/category.types'

// Styles
import { CategoryItemContainer, CategoryName } from './styles.ts'

interface CategoryItemProps {
    category: Category
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
    return (
        <CategoryItemContainer backgroundImage={category.imageUrl}>
            <CategoryName>
                <p>{category.name}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
    )
}

export default CategoryItem