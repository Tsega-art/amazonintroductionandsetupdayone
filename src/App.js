import React, { useContext, useEffect } from "react";
import Product from "./Components/Product/Product";
import Routing from "./Router.jsx";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
import { type } from "@testing-library/user-event/dist/type/index.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return <Routing />;
}

export default App;
