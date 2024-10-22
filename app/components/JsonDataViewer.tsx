"use client";
import React from "react";
import { useJson } from "../contexts/JsonContext";
import { SessionData } from "../models/huntAnalyser";
import { CreaturesResponse } from "../models/creatures";
import MonsterCard from "./MonsterCard";

interface JsonDataViewerProps {
  creatures: CreaturesResponse | null;
}

const JsonDataViewer: React.FC<JsonDataViewerProps> = ({ creatures }) => {
  const { jsonData } = useJson();

  if (!jsonData) {
    return <div>No data to display</div>;
  }

  const sessionData: SessionData = JSON.parse(jsonData);

  return (
    <div className="p-4 bg-gray-100 rounded-md w-full">
      <h2 className="text-xl font-bold mb-4 text-purple-700">
        Session Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-purple-700">
        <div>
          <strong>Session Start:</strong> {sessionData["Session start"]}
        </div>
        <div>
          <strong>Session End:</strong> {sessionData["Session end"]}
        </div>
        <div>
          <strong>Session Length:</strong> {sessionData["Session length"]}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-orange-600">Additional Stats</h3>
        <ul className="list-disc list-inside text-black">
          <li className="!text-green-500">
            <strong>Balance:</strong> {sessionData.Balance}
          </li>
          <li>
            <strong>Damage:</strong> {sessionData.Damage}
          </li>
          <li>
            <strong>Healing:</strong> {sessionData.Healing}
          </li>
          <li>
            <strong>Loot:</strong> {sessionData.Loot}
          </li>
          <li>
            <strong>Supplies:</strong> {sessionData.Supplies}
          </li>
          <li>
            <strong>XP Gain:</strong> {sessionData["XP Gain"]}
          </li>
          <li>
            <strong>XP/h:</strong> {sessionData["XP/h"]}
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-orange-600">Killed Monsters</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sessionData["Killed Monsters"]?.map((monster, index) => {
            const creature = creatures?.creature_list.find(({ race }) => {
              const creatureName = race.toLowerCase().replace(/\s+/g, "");
              const monsterName = monster.Name.toLowerCase().replace(
                /[\s-]+/g,
                ""
              );
              return creatureName.includes(monsterName);
            });

            return (
              <MonsterCard
                key={index}
                name={monster.Name}
                count={monster.Count}
                imageUrl={creature ? creature.image_url : ""}
              />
            );
          })}
        </div>
      </div>

      {/* <div className="mt-4">
        <h3 className="text-lg font-bold text-orange-600">Looted Items</h3>
        <ul className="list-disc list-inside text-black">
          {sessionData["Looted Items"].map((item, index) => (
            <li key={index}>
              {item.Count}x {item.Name}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default JsonDataViewer;
