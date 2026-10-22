import { products } from '../data/products';

function ProductsList({ addToCart }) {

  return (
    <div className='relative mt-10 py-10 px-10 sm:px-10 md:px-20'>
      <h2 className="text-yellow-900 text-2xl text-center mb-4">Our Top Dishes</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {products.map((product) => (
          <div className="bg-white text-center p-5 rounded-md" key={product.id}>      
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto rounded-md"
            />
            <div className='text-md flex justify-between items-center'>
              <h3 className='text-yellow-900 my-2 font-medium'>{product.name}</h3>
              <p className='text-red-500 my-2 font-medium'>${product.price}</p>
            </div>
            <p className='text-sm text-left mb-3'>{product.description}</p>
            <button
              onClick={() => addToCart(product)} 
              className='w-full bg-orange-600 text-white text-sm pt-0.5 pb-1.5 px-4 rounded-sm'
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;