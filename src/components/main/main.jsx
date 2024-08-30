import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../reducers/dataList/dataListSlice";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { postData } from "../../reducers/storeList/storeListSlice";
import ThemeContext from "../../context/ThemeContext";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#000",
  };

  const data = useSelector((store) => store.dataList.data);
  const value = useSelector((store) => store.dataList.search);
  const basketData = useSelector((store) => store.storeList.data2);

  const dispatch = useDispatch();

  const handlePostData = (data) => {
    dispatch(postData(data));
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div
      style={style}
      className="w-[90%] m-auto flex flex-wrap justify-around mt-[20px]"
    >
      {data
        ?.filter((el) => {
          return el.name.includes(value);
        })
        .map((el) => {
          const isInBasket = basketData.some((item) => item.id === el.id);
          return (
            <div
              className="w-[240px] h-[520px] rounded-2xl shadow-2xl bg-white mt-[30px]"
              key={el.id}
            >
              <Link to={`/${el.id}`}>
                <img
                  className="w-[100%] h-[280px] rounded-2xl"
                  src={el.avatar}
                  alt=""
                />
              </Link>
              <div className="w-[90%] m-auto">
                <Link to={`/${el.id}`}>
                  <h1 className="h-[100px] text-[18px] font-bold mb-[10px] mt-[10px]">
                    {el.name}
                  </h1>
                  <h1 className="h-[50px] text-[1em] font-[350] mb-[10px]">
                    {el.avtor}
                  </h1>
                </Link>
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-bold">{el.price}</p>
                  <Button
                    onClick={() => handlePostData(el)}
                    disabled={isInBasket}
                    sx={{
                      width: "129.9px",
                      height: "40px",
                      display: "flex",
                      gap: "10px",
                      borderRadius: "20px",
                      backgroundColor: isInBasket ? "gray" : "primary.main",
                    }}
                    variant="contained"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    <h1 className="text-[12px] font-medium">
                      {isInBasket ? "В корзине" : "В корзину"}
                    </h1>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Main;
