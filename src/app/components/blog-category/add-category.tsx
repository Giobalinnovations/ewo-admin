'use client';
import React from 'react';
import useCategorySubmit from '@/hooks/useCategorySubmit';
import CategoryTables from './category-tables';
import CategoryParent from './category-parent';

const AddCategory = () => {
  const {
    errors,
    control,
    register,
    handleSubmit,
    handleSubmitCategory,
    error,
    isSubmitted,
  } = useCategorySubmit();
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-4">
        <form onSubmit={handleSubmit(handleSubmitCategory)}>
          <div className="px-8 py-8 mb-6 bg-white rounded-md">
            {/* category image upload */}

            {/* category image upload */}

            {/* category parent */}
            <CategoryParent register={register} errors={errors} />
            {/* category parent */}

            <button className="py-2 tp-btn px-7">Add Category</button>
          </div>
        </form>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <CategoryTables />
      </div>
    </div>
  );
};

export default AddCategory;
