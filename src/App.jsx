import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg font-arabic">
      <Header />
      <div className="flex-grow">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
