import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">¡Bienvenido a TecnoMarket!</h1>
    </div>
  );
};

export default WelcomePage;
