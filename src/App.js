import AuthContextProvider from "./context/AuthContext";

const { default: WelcomePage } = require("./components/WelcomePage");

function App() {
  return (
    <div className="App">
      
      <AuthContextProvider>
           <WelcomePage></WelcomePage>
      </AuthContextProvider>


    </div>
  );
}

export default App;
