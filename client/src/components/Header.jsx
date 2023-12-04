import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();

    navigate(`/search?${searchQuery}`);

    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);

      const searchTermFromUrl = urlParams.get("searchTerm");

      if (searchTermFromUrl) {
        setSearchTerm(searchTermFromUrl);
      }
    }, [location.search]);
  };
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg"
    >
      <div className="max-w-6xl mx-auto p-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap items-center justify-between"
        >
          <Link to="/" className="flex items-center mb-2 sm:mb-0">
            <motion.h1
              whileHover={{ scale: 1.1 }}
              className="font-bold text-lg sm:text-2xl flex items-center space-x-1 text-white"
            >
              <span>Property</span>
              <span className="text-yellow-300">Pulse</span>
            </motion.h1>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="flex items-center mt-2 sm:mt-0"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="bg-transparent w-20 sm:w-40 focus:outline-none border-b-2 border-purple-400 text-white placeholder-gray-200"
            />
            <button
              type="submit"
              className="text-white hover:text-yellow-300 focus:outline-none"
            >
              <FaSearch className="text-lg" />
            </button>
          </form>
          <ul className="flex flex-wrap sm:flex-nowrap gap-4 items-center mt-2 sm:mt-0">
            <li className="text-white hover:text-yellow-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-yellow-300">
              <Link to="/about">About</Link>
            </li>
            <li className="text-white hover:text-yellow-300">
              <Link to="/profile">
                {currentUser ? (
                  <img
                    className="rounded-full h-7 w-7 object-cover"
                    src={currentUser.avatar}
                    alt="User Avatar"
                  />
                ) : (
                  <span>Sign in</span>
                )}
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
