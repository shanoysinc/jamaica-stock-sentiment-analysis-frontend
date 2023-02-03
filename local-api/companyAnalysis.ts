import axios from "axios";

export const getAllCompanyData = async () => {
  const { data } = await axios.get(`/api/company/all`);
  return data?.data as any;
};
export const getOneCompanyData = async (id: string) => {
  const { data } = await axios.get(`/api/company/by-id`, {
    params: { id },
  });
  return data as any;
};
