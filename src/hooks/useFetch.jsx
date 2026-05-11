import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [carregant, setCarregant] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json.docs);
      } catch (err) {
        setError('Alguna cosa ha anat malament en la cerca de llibres');
      } finally {
        setCarregant(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, carregant, error };
}