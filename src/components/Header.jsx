import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

function Header({ cart }) {
    return (
        <div className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 flex justify-between items-center gap-3 py-2 px-7 md:px-10 fixed z-5 top-0 left-0">
            <Link to='/'>
                <h1 className="text-xl text-center text-white pt-1.5 pb-3 font-medium">Food Ordering</h1>
            </Link>
            <Link to='/cart' className="text-white">
                <FaCartShopping className="relative text-3xl" />
                {cart.length > 0 && <p className="bg-yellow-200 w-5 absolute right-[20px] top-[8px] md:right-[34px] text-center text-sm text-black font-medium rounded-full">{cart.length}</p>}
            </Link>
        </div>
    );
}

export default Header;