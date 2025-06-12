import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useUpdateData } from '../hooks/useUpdateData';

const API_URL = 'https://retoolapi.dev/BuJvOm/productos';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const updateData = useUpdateData();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();
      setProduct(data);
      reset(data); // set defaultValues
    };
    fetchProduct();
  }, [id, reset]);

  const onSubmit = async (data) => {
    await updateData(`${API_URL}/${id}`, data);
    Swal.fire('Actualizado', 'Producto actualizado exitosamente', 'success');
    navigate('/home');
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <h1 className="text-2xl mb-4">Editar Producto</h1>

      <input {...register('producto', { required: true })} className="input" />
      <input {...register('categoria', { required: true })} className="input" />
      <input type="number" {...register('precio', { required: true })} className="input" />
      <input type="number" {...register('stock', { required: true })} className="input" />

      <button type="submit" className="btn bg-blue-600">Actualizar</button>
    </form>
  );
};

export default EditProduct;
