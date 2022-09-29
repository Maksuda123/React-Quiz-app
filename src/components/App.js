import Layout from "./Layout";
import '../style/App.css'
// import Home from "./page/Home";
import Signup from "./page/Signup";

function App() {
  return (
    <div className="App">
    <Layout>
      {/* <Home/> */}
      <Signup/>
      </Layout>
    </div>
  );
}

export default App;
