import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, getData2 } from "../../reducers/storeList/storeListSlice";

const Basket = () => {
  const data2 = useSelector((store) => store.storeList.data2);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(getData2());
  }, [dispatch]);

  useEffect(() => {
    const calculateTotal = () => {
      const sum = data2.reduce((acc, item) => acc + parseFloat(item.price), 0);
      setTotal(sum);
    };

    calculateTotal();
  }, [data2]);

  console.log(data2);

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <header className="w-[95%] m-auto flex justify-between items-center mb-10">
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
        <div className="flex justify-center items-center"></div>
      </header>

      <main className="w-[95%] m-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-8">Shopping Basket</h2>
        {data2.length > 0 ? (
          <>
            {data2.map((el) => (
              <div
                key={el.id}
                className="flex items-center gap-6 mb-5 p-4 border-b last:border-b-0"
              >
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={el.avatar}
                  alt={el.name}
                />
                <div className="flex-1">
                  <h3 className="tracking-wide text-lg font-semibold">
                    {el.name}
                  </h3>
                  <p className="text-gray-600">{el.avtor}</p>
                  <p className="text-blue-600 font-bold">{el.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-12 border border-gray-300 rounded text-center"
                  />
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => dispatch(deleteData(el.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-8">
              <h3 className="text-xl font-bold">Total:</h3>
              <p className="text-xl font-bold text-blue-600">
                ${total.toFixed(2)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">Your basket is empty.</p>
        )}
      </main>
    </div>
  );
};

export default Basket;
