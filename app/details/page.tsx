"use client";
import { useEffect, useState } from "react";
import JsonDataViewer from "../components/JsonDataViewer";
import { CreaturesResponse } from "../models/creatures";
import { fetchCreatures } from "../services/tibiaService";
import { useJson } from "../contexts/JsonContext";
import { SessionData } from "../models/huntAnalyser";

export default function MockTable() {
  const [creatures, setCreatures] = useState<CreaturesResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<SessionData>();
  const { jsonData } = useJson();

  useEffect(() => {
    if (jsonData) {
      setSessionData(JSON.parse(jsonData));
    }
    return;
  }, [jsonData]);

  useEffect(() => {
    const getCreatures = async () => {
      setLoading(true);
      const localStorageCreatures = localStorage.getItem("creatures");

      if (localStorageCreatures) {
        setCreatures(JSON.parse(localStorageCreatures));
        setLoading(false);
        return;
      }

      try {
        const data = await fetchCreatures();
        setCreatures(data.creatures);
        localStorage.setItem("creatures", JSON.stringify(data.creatures));
      } catch (err) {
        setError(`Failed to fetch creatures: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    getCreatures();
  }, []);

  const saveJson = () => {
    if (sessionData) {
      const fields = {
        session_start: sessionData["Session start"],
        session_end: sessionData["Session end"],
        session_length: sessionData["Session length"],
        balance: sessionData.Balance,
      };
      console.log("fields", fields);
      // saveSessionToFirebase(fields);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between px-2">
            <h1 className="text-xl font-bold mb-4">REGISTRO:</h1>
            <button onClick={saveJson}>Salvar</button>
          </div>
          <JsonDataViewer creatures={creatures} />
        </div>
      </div>
    </>
  );
}
