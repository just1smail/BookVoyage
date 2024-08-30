import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeContext from "../../context/ThemeContext";
import { setSearch } from "../../reducers/dataList/dataListSlice";
import AuthContext from '../../context/AuthContext'; 

const Header = () => {
  const { isLoggedIn, logout } = useContext(AuthContext); 
  const { theme, toggleTheme} = useContext(ThemeContext)
  const search = useSelector((store) => store.dataList.search);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-around items-center mt-[10px]">
      {theme}
      <Button onClick={toggleTheme} variant="contained" color="primary">
        {theme === "light"? "Светлый" : "Темный"} тема
      </Button>
      <Link to={"/"}>
        <div className="flex items-center gap-[20px]">
          <img
            className="w-[80px] h-[80px] ml-[12px] rounded-[50%]"
            src="public/pngtree-books-logo-image_79143.jpg"
            alt=""
          />
          <h1 className="tracking-[4px] mt-[10px]">
            <span className="text-[blue]">BOOK</span>VOYAGE
          </h1>
        </div>
      </Link>

      <div>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 700,
            height: 60,
            borderRadius: "15px",
            border: "1px solid lightgray",
          }}
        >
          <InputBase
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            sx={{ ml: 1, flex: 1, mt: "5px" }}
            placeholder="Поиск книги"
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      <div className="flex justify-center items-center">
        <Link to={"/basket"}>
          <Button
            sx={{
              width: "130px",
              height: "50px",
              borderRadius: "20px",
              gap: "10px",
            }}
            variant="outlined"
          >
            <h1>Корзина</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Button>
        </Link>
        {isLoggedIn && (
          <IconButton color="primary" onClick={logout} sx={{ ml: 2 }}>
            <LogoutIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Header;
