import { BrowserRouter as Router } from 'react-router-dom'
import { productData } from './components/Data';
import { GlobalStyle } from "./components/GlobalStyles";
import Hero from "./components/Hero";
import Products from './components/Products';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
    </Router>
  );
}

export default App;
