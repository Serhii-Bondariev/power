// front/src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import ProductCategories from './components/ProductCategories';
import FeaturedProducts from './components/FeaturedProducts';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/layout/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/auth/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import CategoryPage from './pages/products/CategoryPage';
import ProductDetail from './pages/products/ProductDetail';
import WishlistPage from './pages/user/WishlistPage';
const HomePage = () => (
  <>
    <Hero />
    <ProductCategories />
    <FeaturedProducts />
    <Services />
    <About />
    <Testimonials />
    <Contact />
  </>
);
export function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gray-50">
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products/:category" element={<CategoryPage />} />
                <Route
                  path="/products/:category/:productId"
                  element={<ProductDetail />}
                />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}
