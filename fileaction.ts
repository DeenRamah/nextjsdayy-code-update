"use server";

import {import all the files that you want to be accessed};

 const handleError =(error: uknown, message: string) =>{
  console.log(error, message);
  throw error;
 };

export const uploadFile = async({
  file,
  ownerId,
  accountId,
  path,
}: UploadFileProps) =>{
  const {storage, database} = await createAdminClient();

  try{
    const imputFile = InputFile.fromBuffer(file, file.name);
     const bucketFile = await storage.createFile(
       appwriteConfig.bucketId,
       ID.unique(),
       inputFile,
     );
    const  fileDocument ={
     typr: getFileType(bucketFile.name).type,
     name:bucketFile.name,
     url: constructFileUrl(bucketFile.$id)
    }
  }
}
