import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'

// Utilities
import { CartContext } from '../../contexts/CartContext'

// Components
import CustomButton from '../CustomButton'

// Styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './styles'
import CartItem from '../CartItem'

const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, productsCount, toggleCart } =
    useContext(CartContext)

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>

        {/* produtos */}
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}

        {productsCount > 0 && (
          <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        )}

        {productsCount > 0 && (
          <CustomButton startIcon={<BsCartCheck />}>
            Ir para o Checkout
          </CustomButton>
        )}

        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart