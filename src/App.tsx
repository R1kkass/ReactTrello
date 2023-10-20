import { Provider } from "react-redux";
import "./App.css";
import Routing from "./page";
import { setupStore } from "./app/store/store";

const store = setupStore();

function App() {
    return (
        <Provider store={store}>
            <Routing />
        </Provider>
    );
}

export default App;
