import Wrapper from '@/layout/wrapper';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import ProductSubmit from '../components/products/add-product/product-submit';

const AddProduct = () => {
  return (
    <Wrapper>
      <div className="px-8 py-8 body-content bg-slate-100">
        {/* breadcrumb start */}
        <Breadcrumb title="Add Product" subtitle="Add Product" />
        {/* breadcrumb end */}
        {/* pa */}
        {/* add a product start */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 2xl:col-span-10">
            <ProductSubmit />
          </div>
        </div>
        {/* add a product end */}
      </div>
    </Wrapper>
  );
};

export default AddProduct;
