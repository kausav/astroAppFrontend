import Route from "./components/routes";
import AuthContextProvider from "./components/context";
import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <Route></Route>
    </AuthContextProvider>
  );
}

export default App;
