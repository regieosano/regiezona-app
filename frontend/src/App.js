
import './App.scss';
import data from "./data";

function App() {
  return (
     <>
        <div className="grid-container">
            <header className="row">
               <div>
                   <a href="/" className="brand">regiezona</a>
               </div>
               <div>
                   <a href="/cart">Cart</a>
                   <a href="/signin">Sign In</a>
               </div>
            </header>
            <main>
               
               <div className="row center">
               {
                    data.products.map((p) => (
                     <div key={p._id} className="card">
                       <a href={`/product/${p._id}`}>
                          <img className="medium" src={p.image} alt={p.name}></img>
                       </a>
                      <div className="card-body">
                        <a  href={`/product/${p._id}`}>
                            <h2>{p.name}</h2>
                        </a>
                        <div className="rating">
                           <span><i className="fa fa-star"></i></span>
                           <span><i className="fa fa-star"></i></span>
                           <span><i className="fa fa-star"></i></span>
                           <span><i className="fa fa-star"></i></span>
                           <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            ${p.price}
                        </div>
                      </div>
                    </div>
                    ))
               }
                 
                 
               </div>
            </main>
            <footer className="row center">
                All right reserved
            </footer>
        </div>
     </>
  );
}

export default App;
