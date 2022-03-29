import ProductCard from "components/ProductCard";
import SearchBar from "components/SearchCar";

const Catalog = () => {
    return (
        <div className="container my-4">
            <SearchBar />
            <div className="row">
<div className="col-sm-6 col-lg-4 col-x1-3">
<ProductCard />
</div>
<div className="col-sm-6 col-lg-4 col-x1-3">
<ProductCard />
</div>
<div className="col-sm-6 col-lg-4 col-x1-3">
<ProductCard />
</div>
<div className="col-sm-6 col-lg-4 col-x1-3">
<ProductCard />
</div>
<div className="col-sm-6 col-lg-4 col-x1-3">
<ProductCard />
</div>
<div className="col-sm-6 col-lg-4 col-x1-3">
<ProductCard />
</div>
</div>


</div>
        
    );
};
export default Catalog;