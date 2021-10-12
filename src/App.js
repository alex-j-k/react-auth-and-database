import AuthContextProvider from "./context/AuthContext";
import DbUsersContextProvider from "./context/DbUsersContext";

const { default: WelcomePage } = require("./components/WelcomePage");

function App() {
  return (
    <div className="App">
          <DbUsersContextProvider>
          <AuthContextProvider>
                  <WelcomePage></WelcomePage>
          </AuthContextProvider>
          </DbUsersContextProvider>

    </div>
  );
}

export default App;
