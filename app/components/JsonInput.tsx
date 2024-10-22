"use client";
import React, { useEffect } from "react";
import { useJson } from "../contexts/JsonContext";

const JsonInput: React.FC = () => {
  const { jsonData, setJsonData } = useJson();

  useEffect(() => {
    setJsonData(jsonData);
  }, [jsonData, setJsonData]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setJsonData(newValue);
  };

  return (
    <textarea
      className="w-full h-64 p-2 border border-gray-300 rounded-md text-black"
      value={jsonData}
      onChange={handleChange}
      placeholder="Digite seu JSON aqui..."
    />
  );
};

export default JsonInput;
