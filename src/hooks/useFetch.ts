import { useState, useCallback, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Error } from '@/types/common';

export function useFetch(url: string, params?: Record<string, any>) {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const startFetch = () => {
    setData(null);
    setError(null);
    setIsFetching(true);
  };

  const finishFetch = () => {
    setIsFetching(false);
  };

  const fetchData = useCallback(async () => {
    console.log('***** fetching data for: ', url);
    startFetch();

    try {
      const searchParams = new URLSearchParams();
      if (params) {
        for (const [key, val] of Object.entries(params)) {
          if (Array.isArray(val)) {
            val.forEach((v) => {
              searchParams.append(key, v);
            });
          } else {
            searchParams.append(key, val);
          }
        }
      }
      const { data } = await axios.get(url, { params: searchParams });

      setData(data);
    } catch (err) {
      const res = (err as AxiosError).response;
      const message = (err as AxiosError).message ?? res?.data;

      setError({
        ...res,
        message,
      });
    }

    finishFetch();
  }, [params, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isFetching, fetchData };
}
