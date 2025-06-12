const Message = ({ type = 'info', text }) => {
  const colors = {
    success: 'text-green-600',
    error: 'text-red-600',
    info: 'text-blue-600'
  };

  return (
    <p className={`mt-2 ${colors[type]}`}>
      {text}
    </p>
  );
};

export default Message;
