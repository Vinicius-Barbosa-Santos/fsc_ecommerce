import { FunctionComponent } from 'react'

// Components
import { Header } from '../../components/Header'
import CategoriesOverview from '../../components/Categories-overview'

const ExplorePage: FunctionComponent = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  )
}

export default ExplorePage