import { useFetchData } from '../hooks/useFetchData';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const API_URL = 'https://retoolapi.dev/BuJvOm/productos';

const HomePage = () => {
  const { data, loading, refetch } = useFetchData(API_URL);

  const deleteProduct = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    Swal.fire('Eliminado', 'Producto eliminado exitosamente', 'success');
    refetch();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Inventario de Productos</h1>
      <Link to="/crear" className="btn">Crear Producto</Link>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {data.map((prod) => (
            <div key={prod.id} className="p-4 border shadow rounded">
              <h2 className="text-xl font-bold">{prod.producto}</h2>
              <p>Categoría: {prod.categoria}</p>
              <p>Precio: ${prod.precio}</p>
              <p>Stock: {prod.stock}</p>
              <div className="flex gap-2 mt-2">
                <Link to={`/editar/${prod.id}`} className="btn">Editar</Link>
                <button onClick={() => deleteProduct(prod.id)} className="btn bg-red-500">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
