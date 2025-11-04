import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1f1a] font-sans">
      <Navbar />
      <main className="pt-16">
        <Home />
        <Menu />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
