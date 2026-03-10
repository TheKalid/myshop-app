import { Brands } from '../components/home/Brands';
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { allProducts } from "../data/initialData";
import { prepareProducts } from "../helpers";

export const HomePage = () => {

    const preparedRecentProducts = prepareProducts(allProducts);

    return (
        <div>HomePage
            <FeatureGrid />

            <ProductGrid title="Nuevos productos" products={preparedRecentProducts} />
            <ProductGrid title="Productos destacados" products={[]} />
            <Brands />
        </div> 
    );
};
