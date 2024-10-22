"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface JsonContextType {
  jsonData: string;
  setJsonData: React.Dispatch<React.SetStateAction<string>>;
}

const JsonContext = createContext<JsonContextType | undefined>(undefined);

export const JsonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [jsonData, setJsonData] = useState<string>("");

  return (
    <JsonContext.Provider value={{ jsonData, setJsonData }}>
      {children}
    </JsonContext.Provider>
  );
};

export const useJson = () => {
  const context = useContext(JsonContext);
  if (context === undefined) {
    throw new Error("useJson must be used within a JsonProvider");
  }
  return context;
};
