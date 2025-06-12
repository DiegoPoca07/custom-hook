const Card = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div className="p-6">
      {children}
    </div>
  </div>
);

export default Card;
