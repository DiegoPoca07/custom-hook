export const useDeleteData = () => {
  const deleteData = async (url) => {
    const res = await fetch(url, {
      method: 'DELETE'
    });
    return res.ok;
  };

  return deleteData;
};
