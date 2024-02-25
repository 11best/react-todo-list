import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.scss";
import { store } from "./redux/store.ts";
import Layout from "./component/Layout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>
);
