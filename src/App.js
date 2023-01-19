// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="My web app" contact="Contact me"></Navbar>
      {/* <div className="d-flex justify-content-center align-items-center"> */}
      <TextForm heading="Enter your text"></TextForm>
      {/* </div> */}
    </>
  );
}

export default App;
