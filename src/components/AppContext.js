import { AnnouncementSharp } from "@material-ui/icons";
import React, { useState, useEffect, createContext } from "react";
export const AppContext = createContext();
const AppContextProvider = (props) => {
  const [openNewMatchModal, setOpenNewMatchModal] = useState(false);
  const [guys, setGuys] = useState(null);
  const prepareGuys = (data) => {
    if (!data.isLoading) {
      const names = data.ids;
      const values = data.value;
      const guysObj = names.reduce((guys, curr, index) => {
        guys[curr] = values[index];
        return guys;
      }, {});
      setGuys(guysObj);
    }
  };

  return (
    <AppContext.Provider
      value={{
        openNewMatchModal,
        setOpenNewMatchModal,
        prepareGuys,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
