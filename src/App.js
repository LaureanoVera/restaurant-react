import { BrowserRouter as Router } from 'react-router-dom'
import { productData, productDataTwo } from './components/Data';
import Feature from './components/Feature';
import { GlobalStyle } from "./components/GlobalStyles";
import Hero from "./components/Hero";
import Products from './components/Products';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature heading="Sweet Treats for You" data={productDataTwo} />
    </Router>
  );
}

export default App;
