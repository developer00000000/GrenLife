import { useQuery } from "@tanstack/react-query";

const useGetData = (key, path, options) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      let res = await fetch(`${import.meta.env.VITE_BASE_URL}${path}`);
      let data = await res.json();
      return data;
    },

    ...options
  });
};
export default useGetData;
