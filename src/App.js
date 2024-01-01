import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchContainer from "./components/WatchContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    // errorElement : '',
    children: [
      {
        path: "/",
        element: <MainContainer></MainContainer>,
      },
      {
        path: "/watch",
        element: <WatchContainer></WatchContainer>,
      },
    ],
  },
]);

function App() {
  return (
    // <div className="App">
    // <Provider store={store}>
    //   <Header></Header>
    //   <Body></Body>
    // </Provider>
    <Provider store={store}>
      <Header></Header>
      <RouterProvider router={appRouter}></RouterProvider>
      {/* <Body></Body> */}
    </Provider>
  );
}

export default App;
