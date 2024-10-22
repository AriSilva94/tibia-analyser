import React from "react";
import Image from "next/image";

interface MonsterCardProps {
  name: string;
  count: number;
  imageUrl: string;
}

const MonsterCard: React.FC<MonsterCardProps> = ({ name, count, imageUrl }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          className="w-full h-24 object-contain mb-2"
          width={100}
          height={100}
        />
      ) : (
        <div className="w-full h-24 bg-gray-300 mb-2 flex items-center justify-center">
          <span className="text-gray-500">Image not available</span>
        </div>
      )}
      <h4 className="text-lg font-bold text-black">{count}x</h4>
      <h4 className="text-lg font-bold text-black">{name}</h4>
    </div>
  );
};

export default MonsterCard;
