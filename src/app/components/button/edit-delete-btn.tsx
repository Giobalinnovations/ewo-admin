import Link from 'next/link';
import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { Delete, Edit } from '@/svg';
import { notifyError } from '@/utils/toast';
import { useDeleteProductMutation } from '@/redux/product/productApi';
import DeleteTooltip from '../tooltip/delete-tooltip';
import EditTooltip from '../tooltip/edit-tooltip';

const EditDeleteBtn = ({ id }: { id: string }) => {
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [deleteProduct, { data: delData }] = useDeleteProductMutation();

  const handleDelete = async (productId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Delete this product ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async result => {
      if (result.isConfirmed) {
        try {
          const res = await deleteProduct(productId);
          if ('error' in res) {
            if ('data' in res.error) {
              const errorData = res.error.data as { message?: string };
              if (typeof errorData.message === 'string') {
                return notifyError(errorData.message);
              }
            }
          } else {
            Swal.fire('Deleted!', `Your product has been deleted.`, 'success');
          }
        } catch (error) {}
      }
    });
  };

  return (
    <>
      <div className="relative">
        <a href={`/edit-product/${id}`}>
          <button
            onMouseEnter={() => setShowEdit(true)}
            onMouseLeave={() => setShowEdit(false)}
            className="w-10 h-10 leading-10 text-white rounded-md text-tiny bg-success hover:bg-green-600"
          >
            <Edit />
          </button>
        </a>
        <EditTooltip showEdit={showEdit} />
      </div>
      <div className="relative">
        <button
          onClick={() => handleDelete(id)}
          onMouseEnter={() => setShowDelete(true)}
          onMouseLeave={() => setShowDelete(false)}
          className="w-10 h-10 leading-[33px] text-tiny bg-white border border-gray text-slate-600 rounded-md hover:bg-danger hover:border-danger hover:text-white"
        >
          <Delete />
        </button>
        <DeleteTooltip showDelete={showDelete} />
      </div>
    </>
  );
};

export default EditDeleteBtn;
