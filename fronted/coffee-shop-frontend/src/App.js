// File: src/App.js
import { useContext } from "react";
import About from "./components/About";
import AuthScreen, { AuthContext, AuthProvider } from "./components/Authentication";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import "./Style.css";

const AppContent = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return null; // Or show a loader

  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  return (
    <>
      <Header />
      <Home />
      <About />
      <Menu />
      <Products />
      <Reviews />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
