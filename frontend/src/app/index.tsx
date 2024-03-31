import { Routing } from "~/pages";
import { withProviders } from "./providers";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="app">
      <ToastContainer />
      <Routing />
    </div>
  );
};

export default withProviders(App);
