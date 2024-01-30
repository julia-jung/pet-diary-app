import { useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { Error } from '@/types/common';

export function useApi() {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const resetData = () => {
    setData(null);
    setError(null);
    setIsLoading(false);
  };

  const fetchData = useCallback(async (url: string, params?: Record<string, any>) => {
    resetData();
    setIsLoading(true);
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
      console.log(data);
    } catch (err) {
      const res = (err as AxiosError).response;
      const error = {
        status: res?.status,
        statusText: res?.statusText,
        message: (err as AxiosError).message ?? res?.data,
      } as Error;
      setError(error);
    }
    setIsLoading(false);
  }, []);

  const createData = useCallback(async (url: string, inputData: object) => {
    resetData();
    setIsLoading(true);
    try {
      const { data } = await axios.post(url, inputData);
      setData(data);
    } catch (err) {
      const error = (err as AxiosError).response?.data as Error;
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  const updateData = useCallback(async (url: string, inputData: object) => {
    resetData();
    setIsLoading(true);
    try {
      const { data } = await axios.put(url, inputData);
      setData(data);
    } catch (err) {
      const error = (err as AxiosError).response?.data as Error;
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  const deleteData = useCallback(async (url: string) => {
    resetData();
    setIsLoading(true);
    try {
      const { data } = await axios.delete(url);
      setData(data);
    } catch (err) {
      const error = (err as AxiosError).response?.data as Error;
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  }, []);

  return { data, error, isLoading, fetchData, createData, updateData, deleteData };
}
