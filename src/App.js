import React, { useState } from 'react';
import { FaHome, FaThList, FaUser, FaShoppingCart } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [filteredCategory, setFilteredCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [telefone, setTelefone] = useState('');

  const categories = ['hamburgueres', 'pizzas', 'bebidas', 'porçoes'];

 
  const products = {
    hamburgueres: [
      { name: 'X-Simples', description: 'Pão, carne, mussarela, presunto, batata, salada e maionese', price: 'R$ 9,50', image: '/images/burger.png' },
      { name: 'X-Egg', description: 'Pão, carne, mussarela, presunto, batata, ovo, salada e maionese', price: 'R$ 11,50', image: '/images/burger.png' },
      { name: 'X-Egg Bacon', description: 'Pão, carne, mussarela, presunto, batata, ovo, bacon, salada e maionese', price: 'R$ 14,00', image: '/images/burger.png'},
      { name: 'Super Egg Bacon', description: 'Pão, 2 carnes, mussarela, presunto, batata, ovo, bacon e salada', price: 'R$ 17,00', image: '/images/burger.png'},
      { name: 'Tradicional', description: 'Pão, carne e salada', price: 'R$ 8,00', image: '/images/burger.png'},
      { name: 'Egg Burguer', description: 'Pão, carne, ovo e salada', price: 'R$ 10,00', image: '/images/burger.png'},
      { name: 'X-Burguer', description: 'Pão, carne, mussarela, presunto e salada', price: 'R$ 10,00', image: '/images/burger.png'},
      { name: 'Burguesia', description: 'Pão, carne, mussarela, presunto, ovo, batata e salada', price: 'R$ 12,00', image: '/images/burger.png'},
      { name: 'X-Burguer Dog', description: 'Pão, carne, mussarela, presunto, salsicha, batata e salada', price: 'R$ 12,00', image: '/images/burger.png'},
      { name: 'X-Calabresa', description: 'Pão, carne mussarela, presunto, calabresa, batata e salada', price: 'R$ 15,00', image: '/images/burger.png'},
      { name: 'X-Bacon', description: 'Pão, carne, mussarela, presunto, bacon, batata e salada', price: 'R$ 15,00', image: '/images/burger.png'},
      { name: 'X-Egg Burguer', description: 'Pão, carne, mussarela, presunto, ovo, calabresa, batata e salada', price: 'R$ 17,00', image: '/images/burger.png'},
      { name: 'Calabresa Com Bacon', description: 'Pão, carne, mussarela, presunto, calabresa, bacon, batata e salada', price: 'R$ 17,00', image: '/images/burger.png'},
      { name: 'Turbinado', description: 'Pão, carne, mussarela, presunto, ovo, frango, bacon, calabresa, batata e salada', price: 'R$ 20,00', image: '/images/burger.png'},
      { name: 'Big Delícia', description: 'Pão, 2 carnes, 2 mussarelas, 2 presuntos, 2 ovos, frango, bacon, calabresa, batata e salada', price: 'R$ 28,00', image: '/images/burger.png'},
    ],
    pizzas: [
      { name: 'Alho', description: 'Mussarela, alho e orégano', price: 'R$ 45,00', image: '/images/Alho.png'},
      { name: 'Atum', description: 'Mussarela, atum e cebolas em rodelas', price: 'R$ 40,00', image: '/images/Atum.png'},
      { name: 'Baiana', description: 'Mussarela, calabresa, moida, ovos, pimenta, cebola e um toque de parmesão', price: 'R$ 50,00', image: '/images/Baiana.png'},
      { name: 'Bauru', description: 'Mussarela, presunto, tomate e orégano', price: 'R$ 45,00', image: '/images/Bauru.png'},
      { name: 'Brigadeiro', description: 'Chocolate nobre e granulado', price: 'R$ 45,00', image: '/images/Brigadeiro.png'},
      { name: 'Caípira', description: 'Mussarela, frango e milho', price: 'R$ 40,00', image: '/images/Caipira.png'},
      { name: 'Calabresa', description: 'Mussarela, calabresa, cebolas em rodelas e orégano', price: 'R$ 40,00', image: '/images/Calabresa_Especial.png'},
      { name: 'Calabresa Especial ', description: 'Mussarela, calabresa, cebola, azeitona, requeijão, catupiry e orégano', price: 'R$ 50,00', image: '/images/Calabresa.png'},
      { name: 'Cheddar', description: 'Mussarela, azeitona, requeijão sabor cheddar e orégano', price: 'R$ 45,00', image: '/images/Cheddar.png'},
      { name: 'Frango com Catupiry', description: 'Mussarela, manjericão, tomate cebola e orégano', price: 'R$ 50,00', image: '/images/Frango_Catupiry.png'},
      { name: 'Marguerita', description: 'Mussarela, Manjericão, tomate, cebola e orégano', price: 'R$ 50,00', image: '/images/Marguerita.png'},
      { name: 'Milho', description: 'Mussarela, milho, tomate e orégano', price: 'R$ 40,00', image: '/images/Milho.png'},
      { name: 'Mussarela', description: 'Mussarela e orégano', price: 'R$ 40,00', image: '/images/Mussarela.png'},
      { name: 'Namorado', description: 'Mussarela, palmito, requeijão, catupiry e orégano', price: 'R$ 45,00', image: '/images/Namorado.png'},
      { name: 'Napolitana', description: 'Mussarela, parmesão, tomate fresco, azeitona e orégano', price: 'R$ 40,00', image: '/images/Napolitana.png'},
      { name: 'Portuguesa', description: 'Mussarela, presunto, ovos, cebola, azeitona, tomate, milho, palmito, pimentão e oregano', price: 'R$ 50,00', image: '/images/Portuguesa.png'},
      { name: 'Quatro Queijos', description: 'Mussarela, provolone, requeijão, catupiry e parmesão', price: 'R$ 50,00', image: '/images/Quatro_queijos.png'},
      { name: 'Quenn delícia', description: 'Mussarela, lombo canadense, baicon, creme de leite, tomate, azeitona, cebola e orégano', price: 'R$ 50,00', image: '/images/Queen_delicia.png'},
    ],
    bebidas: [
      { name: 'Água Sem Gás', description: 'Água mineral natural!', price: 'R$ 2,00', image: '/images/Agua_sem_gas.png' },
      { name: 'Coca-Cola Lata', description: 'Todo mundo ama tomar uma Coca-Cola!', price: 'R$ 6,00', image: '/images/Coca_Lata.png' },
      { name: 'Guaravita', description: 'Quem bebe dá 10!', price: 'R$ 2,00', image: '/images/Guaravita.png' },
      { name: 'Água Com Gás', description: 'Água mineral natural!', price: 'R$ 2,50', image: '/images/Agua_com_gas.png' },
      { name: 'Coca-Cola 2 Litros', description: 'Todo mundo ama tomar uma Coca-Cola!', price: 'R$ 15,00', image: '/images/Coca_2_l.png' },    
    ],
    porçoes: [
      { name: 'Batata Frita P', description: 'Com essa Delícia de porção com 400g até 2 pessoas ficarem satisfeitas', price: 'R$ 20,00', image: '/images/porcoes_fritasp.png' },
      { name: 'Batata Frita G', description: 'Com essa Delícia de porção com 700g mais duas camadas de recheio até 4 pessoas ficarem satisfeitas', price: 'R$ 28,00', image: '/images/porcao_fritasg.png' },
    ],
  };

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
  };

  const resetFilter = () => {
    setFilteredCategory('');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setTelefone(event.target.value);
  };

  const buscarWhatsApp = () => {
    alert(`Buscando WhatsApp para o número: ${telefone}`);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-banner"></div>
        <div className="header-content">
          <img src="/images/1.png" alt="Logo da Loja" className="header-logo" />
          <h1 className="header-title">Q´delícia Fast Food</h1>
        </div>
      </header>

      <div className="container">
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`category-button ${filteredCategory === category ? 'active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
          <button className="category-button" onClick={resetFilter}>Mostrar Todos</button>
        </div>

        {categories.map((category) => (
          <section
            key={category}
            id={category}
            className={`product-section ${filteredCategory === category || !filteredCategory ? 'filtered' : 'hidden'}`}
          >
            <h2 className="section-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="product-list">
              {products[category].map((product, index) => (
                <div className="card" key={index}>
                  <img src={product.image} alt={`Imagem de ${product.name}`} className="card-image" />
                  <div className="card-content">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-description">{product.description}</p>
                    <p className="card-price">{product.price}</p>
                    <button className="button" onClick={openModal}>Peça Agora</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Digite seu telefone</h2>
            <input
              type="text"
              value={telefone}
              onChange={handleInputChange}
              placeholder="Digite seu telefone"
            />
            <button onClick={buscarWhatsApp}>Buscar</button>
          </div>
        </div>
      )}

      <footer className="app-footer">
        <a href="/" className="footer-link">
          <FaHome className="icon" />
          <span className="icon-label">Início</span>
        </a>
        <a href="#" className="footer-link">
          <FaThList className="icon" />
          <span className="icon-label">Categorias</span>
        </a>
        <a href="#" className="footer-link">
          <FaUser className="icon" />
          <span className="icon-label">Perfil</span>
        </a>
        <a href="#" className="footer-link">
          <FaShoppingCart className="icon" />
          <span className="icon-label">Carrinho</span>
        </a>
      </footer>
    </div>
  );
};

export default App;
