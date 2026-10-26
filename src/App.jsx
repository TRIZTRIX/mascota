import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header titulo="Encuentra a tu Nuevo Mejor Amigo 🐶" />
      
      <div className="row g-4 justify-content-center">
        {/* Perrito 1 */}
        <div className="col-12 col-md-6 col-lg-3">
          <MyCard 
            imagen="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80" 
            nombre="Max" 
            descripcion="Un chico muy noble, leal y protector. Le encantan los paseos largos por el parque." 
            textoTag="Golden Retriever" 
            colorTag="warning" 
          />
        </div>
        
        {/* Perrito 2 */}
        <div className="col-12 col-md-6 col-lg-3">
          <MyCard 
            imagen="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400&q=80" 
            nombre="Luna" 
            descripcion="Pequeña, dormilona y muy cariñosa. Es la compañía perfecta para vivir en departamento." 
            textoTag="Pug" 
            colorTag="info" 
          />
        </div>
        
        {/* Perrito 3 */}
        <div className="col-12 col-md-6 col-lg-3">
          <MyCard 
            imagen="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80" 
            nombre="Rocky" 
            descripcion="Fuerte, valiente y con un gran corazón. Se lleva excelente con los niños pequeños." 
            textoTag="Bulldog" 
            colorTag="dark" 
          />
        </div>
        
        {/* Perrito 4 */}
        <div className="col-12 col-md-6 col-lg-3">
          <MyCard 
            imagen="https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&w=400&q=80" 
            nombre="Bella" 
            descripcion="Muy inteligente y fácil de entrenar. Necesita una familia que le dé mucha atención y mimos." 
            textoTag="Poodle" 
            colorTag="secondary" 
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;