import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

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

      if(searchTermFromUrl){
        setSearchTerm(searchTermFromUrl);
      }
    },[location.search]);
  };
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
    <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
      <Link to="/">
        <h1 className="font-bold text-lg sm:text-2xl flex items-center space-x-1">
          <span className="text-white">Property</span>
          <span className="text-yellow-300">Pulse</span>
        </h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="bg-transparent w-20 sm:w-40 focus:outline-none border-b-2 border-purple-400 text-white placeholder-gray-200"
        />
        <button type="submit" className="text-white hover:text-yellow-300 focus:outline-none">
          <FaSearch className="text-lg" />
        </button>
      </form>
      <ul className="flex gap-4 items-center">
        <Link to="/" className="text-white hover:text-yellow-300">
          <li>Home</li>
        </Link>
        <Link to="/about" className="text-white hover:text-yellow-300">
          <li>About</li>
        </Link>
        <Link to="/profile" className="text-white hover:text-yellow-300">
          {currentUser ? (
            <img
              className="rounded-full h-7 w-7 object-cover"
              src={currentUser.avatar}
              alt="User Avatar"
            />
          ) : (
            <li>Sign in</li>
          )}
        </Link>
      </ul>
    </div>
  </header>
  
  );
};

export default Header;