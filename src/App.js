import './styles/App.css';
import './styles/Navbar.css';
import './styles/Home.css';
import './styles/Footer.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    );
}

export default App;