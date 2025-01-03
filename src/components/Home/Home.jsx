
import NewArrivals from '../Products/NewArrivals'
import Products from '../Products/Products'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Discount from './Discount/Discount'
import OrderMethod from './OrderMethod/OrderMethod'

const Home = () => {
  return (
    <div>
     <Banner />
     <Category />
     <Products />
     <NewArrivals />
     <Discount />
     <div className="section1 py-5">
     <OrderMethod />
     </div>
     
    </div>
  )
}

export default Home
