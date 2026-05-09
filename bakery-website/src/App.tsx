import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Categories from './components/sections/Categories';
import Products from './components/sections/Products';
import Special from './components/sections/Special';
import Contact from './components/sections/Contact';
import Cart from './components/features/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Categories />
          <Products />
          <Special />
          <Contact />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
