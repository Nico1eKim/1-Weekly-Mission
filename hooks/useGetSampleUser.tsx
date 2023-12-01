import useGetData from "./useGetData";
import { PathType } from "@/utils/api";

const useGetSampleUser = () => {
  const user = useGetData({ path: "SHARED_USER" as PathType });
  if (!user) return null;
  return user;
};

export default useGetSampleUser;
