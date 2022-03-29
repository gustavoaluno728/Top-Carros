import './styles.css';
import ProductImg from 'assets/images/product.png';
import ProductPrice from 'components/ProductPrice';
import ButtonIcon1 from 'components/Navbar/ButtonIcon1';

const ProductCard = () =>{

    return(
<div className="base-card product-card">
    <div className="card-top-container">
        <img src={ProductImg} alt="Imagem do produto" />
    </div>
    <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <ProductPrice/>
        <div className="ButtonI">
        <ButtonIcon1 />

        </div>
       
    </div>
</div>

    );
}

export default ProductCard;