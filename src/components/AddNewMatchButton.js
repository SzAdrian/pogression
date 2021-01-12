import { Fab } from "@material-ui/core";
import React, { useContext } from "react";
import AddIcon from "@material-ui/icons/Add";
import { AppContext } from "./AppContext";

export default function AddNewMatchButton() {
  const { setOpenNewMatchModal } = useContext(AppContext);
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={() => setOpenNewMatchModal(true)}
    >
      <AddIcon />
    </Fab>
  );
}
