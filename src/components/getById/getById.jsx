import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

const GetById = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  async function getById(id) {
    try {
      const { data } = await axios.get(
        "https://664ca5b335bbda1098814d7e.mockapi.io/data/" + id
      );
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getById(id);
  }, []);

  return (
    <div>
      <div className="w-[95%] m-auto flex justify-between items-center mt-[10px]">
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

        <div className="flex justify-center items-center">
          <Button
            sx={{ width: "120px", height: "50px", borderRadius: "20px" }}
            variant="outlined"
          >
            Войти
          </Button>
        </div>
      </div>

      <div className="w-[90%] ml-[100px] flex mt-[50px]">
        <div>
          <img
            className="w-[400px] h-[500px] rounded-2xl"
            src={data.avatar}
            alt=""
          />
        </div>

        <div className="ml-[150px] w-[60%]">
          <h1 className="text-[2.25rem] font-[700] mb-[30px]">{data.name}</h1>

          <p className="text-[1.5rem] font-[400] mb-[30px]">{data.avtor}</p>

          <div className="w-[50%] flex justify-between">
            <div>
              <p className="text-[#4d4d4d] font-[400]">ID товара</p>
              <p className="text-[#4d4d4d] font-[400] mt-[10px]">
                Издательство
              </p>
              <p className="text-[#4d4d4d] font-[400] mt-[10px]">Год издания</p>
              <p className="text-[#4d4d4d] font-[400] mt-[10px]">
                Количество страниц
              </p>
              <p className="text-[#4d4d4d] font-[400] mt-[10px]">
                Возрастное ограничение
              </p>
            </div>
            <div>
              <p className="text-[1rem] font-[500]">{data.id}</p>
              <p className="text-[1rem] font-[500] mt-[10px]">Nur Book</p>
              <p className="text-[1rem] font-[500] mt-[10px]">2021</p>
              <p className="text-[1rem] font-[500] mt-[10px]">352 стр.</p>
              <p className="text-[1rem] font-[500] mt-[10px]">12+</p>
            </div>
          </div>

          <Button
            sx={{
              width: "250px",
              height: "60px",
              display: "flex",
              gap: "10px",
              borderRadius: "20px",
              mt: "30px",
            }}
            variant="contained"
          >
            <h1 className="text-[20px] font-medium">В корзину</h1>
            <h1 className="text-[20px] font-medium">{data.price}</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GetById;
