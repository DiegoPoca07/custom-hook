export const useSaveData = () => {
  const saveData = async (url, data, method = 'POST') => {
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  };
  return saveData;
};
