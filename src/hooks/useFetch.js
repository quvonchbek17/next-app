import { useState, useEffect } from 'react';
import axios from 'axios';

 function useFetch({url}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading(true)
      setData(null);
      setError(null);
      axios.get(`${process.env.NEXT_PUBLIC_MAIN_URL}/${url}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
        }
      })
      .then(res => {
          setLoading(false);
          setData(res.data)
      })
      .catch(err => {
          setLoading(false)
          setError(err)
      })
  }, [url])

  return { data, loading, error }
}
export default useFetch;