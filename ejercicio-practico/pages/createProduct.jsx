import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useSaveData } from '../hooks/useSaveData';
import Layout from '../components/Layout';

const API_URL = 'https://retoolapi.dev/BuJvOm/productos';

const CreateProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const saveData = useSaveData();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await saveData(API_URL, data, 'POST');
    Swal.fire('Creado', 'Producto creado exitosamente', 'success');
    navigate('/home');
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Crear Producto</h1>

          <div className="space-y-4">
            <div>
              <input
                {...register('producto', { required: true })}
                placeholder="Nombre del producto"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              {errors.producto && (
                <p className="mt-1 text-sm text-red-600">El nombre es obligatorio</p>
              )}
            </div>

            <div>
              <input
                {...register('categoria', { required: true })}
                placeholder="Categoría"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              {errors.categoria && (
                <p className="mt-1 text-sm text-red-600">La categoría es obligatoria</p>
              )}
            </div>

            <div>
              <input
                type="number"
                {...register('precio', { required: true })}
                placeholder="Precio"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              {errors.precio && (
                <p className="mt-1 text-sm text-red-600">El precio es obligatorio</p>
              )}
            </div>

            <div>
              <input
                type="number"
                {...register('stock', { required: true })}
                placeholder="Stock"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              {errors.stock && (
                <p className="mt-1 text-sm text-red-600">El stock es obligatorio</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-200"
          >
            Crear Producto
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateProduct;
