
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import GadgetList from './components/GadgetList';
import ContactForm from './components/ContactForm';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <div className="pt-16">
          <Hero />
          <Features />
          <GadgetList />
          <ContactForm />
        </div>
      </div>
    </ThemeProvider>
  );
}