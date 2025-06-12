import { useFetchData } from '../hooks/useFetchData';
import { useDeleteData } from '../hooks/useDeleteData';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Title from '../components/Title';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/Layout';

const API_URL = 'https://retoolapi.dev/BuJvOm/productos';

const HomePage = () => {
  const { data, loading, refetch } = useFetchData(API_URL);
  const deleteData = useDeleteData();

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      const success = await deleteData(`${API_URL}/${id}`);
      if (success) {
        Swal.fire('Eliminado', 'Producto eliminado exitosamente', 'success');
        refetch();
      } else {
        Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
      }
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Title>Inventario de Productos</Title>
          <Link to="/crear">
            <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-md">
              + Crear Nuevo Producto
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((prod) => (
              <Card key={prod.id}>
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-800">{prod.producto}</h2>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex justify-between">
                      <span>Categoría:</span>
                      <span className="font-medium">{prod.categoria}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Precio:</span>
                      <span className="font-medium text-emerald-600">${prod.precio}</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Stock:</span>
                      <span className="font-medium">{prod.stock} unidades</span>
                    </p>
                  </div>
                  <div className="flex gap-3 pt-4 border-t">
                    <Link to={`/editar/${prod.id}`} className="flex-1">
                      <Button className="w-full bg-amber-500 hover:bg-amber-600">
                        Editar
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleDelete(prod.id)}
                      className="flex-1 bg-red-600 hover:bg-red-700"
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;

