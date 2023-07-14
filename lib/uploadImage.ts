import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    " 64776fa71155bd1e93ec",
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
