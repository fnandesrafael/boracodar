import React, { createContext, useState } from 'react';

export type FileProps = File & { id?: string };

export type RejectionProps = {
  id: string;
  file: File;
  errors: Array<{ code: string; message: string }>;
};

type FileContextProps = {
  files: Array<FileProps>;
  setFiles: React.Dispatch<React.SetStateAction<Array<FileProps>>>;
  rejections: Array<RejectionProps>;
  setRejections: React.Dispatch<React.SetStateAction<Array<RejectionProps>>>;
};

export const FilesContext = createContext<FileContextProps>(null);

export default function FilesProvider({ children }) {
  const [files, setFiles] = useState<Array<FileProps>>([]);
  const [rejections, setRejections] = useState<Array<RejectionProps>>([]);

  return (
    <FilesContext.Provider
      value={{ files, setFiles, rejections, setRejections }}
    >
      {children}
    </FilesContext.Provider>
  );
}
