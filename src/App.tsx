import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const { isLogged } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Header />
      {!isLogged && <Auth />}
      <Counter />;
    </>
  );
}

export default App;
