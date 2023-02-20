// import logo from './logo.svg';
// import '/App.css';
import LinkItem from '../components/LinkItem';
import Navbar from '../components/Navbar';
import TextForm from '../components/TextForm';


function App() {
  return (
    <>
      <Navbar title="My web app" contact="Contact me"></Navbar>
      {/* <div className="d-flex justify-content-center align-items-center"> */}
      <TextForm heading="Enter your text"></TextForm>
      {/* </div> */}
      <LinkItem title="https://www.google.co.in/"></LinkItem>
    </>
  );
}

export default App;
