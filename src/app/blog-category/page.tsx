import Wrapper from '@/layout/wrapper';
import Breadcrumb from '../components/breadcrumb/breadcrumb';
import AddCategory from '../components/blog-category/add-category';

const BlogCategoryPage = () => {
  return (
    <Wrapper>
      <div className="px-8 py-8 body-content bg-slate-100">
        {/* breadcrumb start */}
        <Breadcrumb title="Blog Category" subtitle="Blog Category List" />
        {/* breadcrumb end */}

        {/*add category area start */}
        <AddCategory />
        {/*add category area end */}
      </div>
    </Wrapper>
  );
};

export default BlogCategoryPage;
