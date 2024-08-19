import { FunctionComponent, useContext } from 'react'

// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './styles'

// Utilities
import Product from '../../types/product.types'
import CustomButton from '../CustomButton'
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../contexts/CartContext'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {

  const { addProductToCart } = useContext(CartContext)

  const handleAddToCartClick = () => {
    addProductToCart(product)
  }

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem