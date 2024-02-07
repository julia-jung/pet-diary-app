import { useState, useCallback } from 'react';
import axios, { AxiosError } from 'axios';
import { Error } from '@/types/common';

export function useMutate(url: string) {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const startMutate = () => {
    setData(null);
    setError(null);
    setIsSaving(true);
  };

  const finishMutate = () => {
    setIsSaving(false);
  };

  const mutateData = useCallback(
    async (method: 'post' | 'put' | 'delete', input?: object) => {
      startMutate();

      try {
        const { data } = await axios({ method, url, data: input });

        setData(data);
      } catch (err) {
        const res = (err as AxiosError).response;
        const message = (err as AxiosError).message ?? res?.data;

        setError({
          ...res,
          message,
        });
      }

      finishMutate();
    },
    [url],
  );

  return { data, error, isSaving, mutateData };
}
