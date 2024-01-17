import { createContext, useState, useEffect } from "react";
// import { getPhotos } from "../utils/pexels";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [monto, setMonto] = useState(0);
  // console.log(process.env.NODE_ENV);

  // useEffect(() => {
  //   const getPhotosWrapper = async () => {
  //     const res = await getPhotos();
  //     setData(res);
  //   };
  //   getPhotosWrapper();
  // }, []);

  return (
    <PizzaContext.Provider value={{ data, setData }}>
      {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;
