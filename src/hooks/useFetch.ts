import useSwr from "swr";
import api from "../services/api";

export function useFetch<Data = any>(url: string) {
  const { data, error, mutate } = useSwr<Data>(
    url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    {
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
    }
  );

  return { data, error, mutate };
}
