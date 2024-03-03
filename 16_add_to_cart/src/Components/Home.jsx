import all_product from './assets/all_product'
import SingleProduct from './SingleProduct'

function Home() {
  return (
    <div className='home'>
        {
            all_product.map((ele)=>{
                return <SingleProduct key={ele.id} prod={ele} />
            })
        }
    </div>
  )
}

export default Home