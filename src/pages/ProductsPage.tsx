import { allProducts } from "../data/initialData";
import { prepareProducts } from '../helpers';
import { CardProduct } from '../components/products/CardProduct';

export const ProductsPage = () => {

const preparedProducts = prepareProducts(allProducts);


  return < >
    <h1 className="text-5x1 font-semibold text-center mb-12">
      Productos
    </h1>
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {/* FILTROS */}
      <div>Filtros</div>
      <div className="col-span-2 lg:col-span-2 xl:col-span4 flex flex-col gap-12">
        <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
          	{preparedProducts.map(product => (
				<CardProduct 
					key={product.id}
					name={product.name}
					price={product.price}
					colors={product.colors}
					img={product.images[0]}
					slug={product.slug}
					variants={product.variants}
				/>
			))}
        </div>
      </div>

      {/* TODO */}
    </div>
  </>;
}  