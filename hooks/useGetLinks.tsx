import useGetData from "./useGetData";
import { PathType } from "@/utils/api";

const useGetLinks = (folderId?: number | null) => {
  const query = folderId ? `?folderId=${folderId}` : "";
  const links = useGetData({ path: "FOLDER_LINKS", query });
  if (!links) return null;
  return links.data;
};

export default useGetLinks;
