import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function Cart({ cart, handleDecrease, handleIncrease, removeFromCart, totalCost }) {

    return (
        <div className="relative flex flex-col justify-center items-center min-h-dvh ">
            {cart.length === 0 ? (
                <div className="w-80 relative text-center mx-auto ">
                    <h2 className="text-2xl mb-5 pb-2 border-b-2 border-orange-500">Shopping Cart</h2>
                    <p>The Cart is empty!</p>
                    <div className="my-5 text-center">
                        <Link to='/'>
                            <button
                                className='w-80 bg-orange-600 text-white text-sm pt-0.5 pb-1.5 px-4 rounded-sm'
                            >
                                Go Shopping
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="w-80 relative pt-20 mx-auto">
                    <h2 className="text-center text-2xl pl-3 pb-2 mb-5 border-b-2 border-orange-500">Shopping Cart</h2>
                    {cart.map((item) => {
                        return (
                            <div className="flex justify-between items-center text-center my-2 px-3 pt-1 pb-3 border-b border-orange-500" key={item.id}>
                                <div className="">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-[60px] h-[59px] mx-auto rounded-md"
                                    />
                                </div>
                                <div className="text-sm">
                                    <h3 className='text-yellow-900 pb-0 mb-0'>{item.name}</h3>
                                    <p className='text-red-500 mb-1'>${item.price}</p>
                                    <div className="w-20 mx-auto border-1 rounded-sm">
                                        <button 
                                            onClick={() => handleDecrease(item)}
                                            className="cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="mx-2 px-2 pt-0 border-l border-r">{item.quantity}</span>
                                        <button 
                                            onClick={() => handleIncrease(item)}
                                            className="cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="text-red-600 text-md"
                                    type="button"
                                    onClick={() => removeFromCart(item)}
                                >
                                    <FaTrashAlt /> 
                                </button>
                            </div>
                        )
                    })}
                    <div className="text-xl text-center my-5">Total Price: ${totalCost.toFixed(2)}</div>
                    <div className="my-5 mx-auto text-center">
                        <Link to='/'>
                            <button
                                className='w-80 bg-orange-600 text-white text-sm pt-0.5 pb-1.5 px-4 rounded-sm'
                            >
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;