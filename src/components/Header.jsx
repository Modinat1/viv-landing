import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import logo from '../assets/cover.png';
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsSuitHeartFill } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { paginationItems, navBarList } from '../constants';


const Header = () => {
  const products = useSelector((state) => state.ProductReducer.products);
  const [showMenu, setShowMenu] = useState(true);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
    return () => window.removeEventListener("resize", ResponsiveMenu);
  }, []);

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <header className='md:flex justify-between items-center w-full p-3 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200'>

        <Link to="/">
            <div>
              <img className="w-32 object-cover" src={logo} />
            </div>
          </Link>

          <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
      {/* ==============================SEARCH INPUT BEGINS-------------------------------------- */}

      <div className="relative w-full lg:w-[600px] mt-3 p-3 border border-gray-500 text-base text-primeColor bg-white flex items-center justify-between rounded-xl">
        <input
          className="flex-1 outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
          type="text"
          onChange={handleSearch}
          value={searchQuery}
          placeholder="Search your products here"
        />
        <FaSearch className="w-5" />
        {searchQuery && (
          <div
            className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
          >
            {filteredProducts.map((item) => (
              <div
                onClick={() =>
                  navigate(
                    `/product/${item.productName.toLowerCase().split(" ").join("")}`,
                    { state: { item } }
                  ) & setShowSearchBar(true) & setSearchQuery("")
                }
                key={item._id}
                className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
              >
                <img className="w-24" src={item.img} alt="productImg" />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-lg">
                    {item.productName}
                  </p>
                  <p className="text-xs">
                    {item.des.length > 100
                      ? `${item.des.slice(0, 100)}...`
                      : item.des}
                  </p>
                  <p className="text-sm">
                    Price:{" "}
                    <span className="text-primeColor font-semibold">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* ==============================SEARCH INPUT BEGINS-------------------------------------- */}
    
      {/* ==============================NAV BEGINS-------------------------------------- */}
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
        

          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navBarList.map(({ _id, title, link }) => (
                    <NavLink
                      key={_id}
                      className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      to={link}
                      // state={{ data: location.pathname.split("/")[1] }}
                    >
                      <li>{title}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            {/* <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            /> */}
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={logo}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            // state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul> 
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>
      {/* ==============================NAV ENDS-------------------------------------- */}

      

      <div className="flex gap-x-3 lg:mt-0 mt-5 justify-center md:justify-end items-center pr-6 cursor-pointer relative">
        <div onClick={() => setShowUser(!showUser)} className="flex">
          <FaUser />
          <FaCaretDown />
        </div>
        {showUser && (
          <motion.ul
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
          >
            <Link to="#">
              <li className="text-[#333333] px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-gray-400 duration-300 cursor-pointer">
                Login
              </li>
            </Link>
            <Link 
            // onClick={() => setShowUser(false)} to="/signup"
            >
              <li className="text-[#333333] px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-gray-400 duration-300 cursor-pointer">
                Sign Up
              </li>
            </Link>
            <li className="text-[#333333] px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-gray-400 duration-300 cursor-pointer">
              Profile
            </li>
            <li className="text-[#333333] px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-gray-400 duration-300 cursor-pointer">
              Others
            </li>
          </motion.ul>
        )}
        <Link to="#">
          <div className="relative">
            <FaShoppingCart />
            <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
              {products.length > 0 ? products.length : 0}
            </span>
          </div>
        </Link>
        <BsSuitHeartFill />
      </div>
    </header>
  );
};

export default Header;
