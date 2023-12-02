import useGetData from "./useGetData";
import { PathType } from "@/utils/api";

const useGetFolders = () => {
  const folders = useGetData({ path: "FOLDER_FOLDERS" });
  if (!folders) return null;
  return folders.data;
};

export default useGetFolders;
