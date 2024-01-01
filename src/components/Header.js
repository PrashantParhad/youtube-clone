import React, { useEffect, useState } from "react";
import { LOGO, SEARCH_TEXT } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { toggleSlice } from "../utils/mainSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setsearchSuggestion] = useState([]);

  const dispatch = useDispatch();
  const toggleSlider = () => {
    dispatch(toggleSlice());
  };

  useEffect(() => {
    getSearchResult();
  }, [searchText]);

  const getSearchResult = async () => {
    let response = await fetch(SEARCH_TEXT + searchText);
    let jsonResponse = await response.json();
    setsearchSuggestion(jsonResponse[1]);
    console.log(searchSuggestions);
  };
  return (
    <div className="header">
      <div className="header-logo">
        <span onClick={() => toggleSlider()}>
          <FontAwesomeIcon icon={faBars} />
        </span>
        <a href="/">
          {""}
          <img src={LOGO} alt="logo"></img>
        </a>
      </div>
      <div>
        <div>
          <input
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <span onClick={() => setSearchText("")}>X</span>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {searchSuggestions.length > 0 && (
          <div className="searchResult">
            <ul>
              {searchSuggestions.map((searchText) => (
                <li>{searchText}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default Header;
