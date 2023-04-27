import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Menu from './components/menu.js';
import Footer from './components/footer.js';
import Routing from './components/routing.js';



function App() {
  return (
    <div className="App">
    <Menu />
    <Routing />
    <Footer />
    </div>
  );
}

export default App;
