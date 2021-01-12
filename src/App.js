import { FirestoreCollection } from "@react-firebase/firestore";
import AddNewMatchButton from "./components/AddNewMatchButton";
import NavBar from "./components/NavBar";
import PlayerTable from "./components/PlayerTable";
import NewMatch from "./components/NewMatch/NewMatch";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";
const App = () => {
  const { prepareGuys } = useContext(AppContext);
  return (
    <>
      <NavBar />
      <FirestoreCollection path="/guys/">
        {(d) => {
          return <PlayerTable isLoading={d.isLoading} data={d} />;
        }}
      </FirestoreCollection>
      <NewMatch />
      <AddNewMatchButton />
    </>
  );
};

export default App;
