import logo from './logo.svg';
import './App.css';
import ProductList from './Props/ProductList';
import dataJson from './Data/data.json';

function App() {
  return (
    <div className="container-fluid">
      <div className='row'>
        <div className='col-4'>
          <div className="nav flex-column nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ minHeight: 800 }}>
            <button className="nav-link active text-left" id="v-pills-home-tab" data-toggle="pill" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            <button className="nav-link  text-left" id="v-pills-profile-tab" data-toggle="pill" data-target="#shop" type="button" role="tab" aria-controls="shop" aria-selected="false">Shop</button>
          </div>
        </div>
        <div className='col-8'>
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <ProductList arrProduct={dataJson} />
            </div>
            <div className="tab-pane fade" id="shop" role="tabpanel" aria-labelledby="v-pills-profile-tab">2</div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;
