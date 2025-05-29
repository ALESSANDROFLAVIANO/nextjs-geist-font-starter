"use client";

import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  field: string;
  imageSrc: string;
  sciinsLevel: "basic" | "premium" | "vip";
  onLike?: () => void;
  onViewProfile?: () => void;
}

const sciinsLevelColor = {
  basic: "bg-green-600",
  premium: "bg-pink-600",
  vip: "bg-purple-600",
};

export function ProfileCard({
  name,
  age,
  location,
  field,
  imageSrc,
  sciinsLevel,
  onLike,
  onViewProfile,
}: ProfileCardProps) {
  return (
    <div className="w-40 p-2 rounded-lg shadow-md bg-white dark:bg-gray-800">
      <div className="relative">
        <Avatar>
          <AvatarImage src={imageSrc} alt={name} />
        </Avatar>
        <Badge
          className={`absolute top-1 left-1 text-xs font-semibold ${sciinsLevelColor[sciinsLevel]}`}
        >
          SCIINS
        </Badge>
      </div>
      <div className="mt-2 text-center">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
          {name}, {age}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{location}</p>
      </div>
      <div className="mt-1 text-center text-sm text-gray-700 dark:text-gray-300">
        {field}
      </div>
      <div className="mt-3 flex justify-between space-x-2">
        <Button variant="outline" size="sm" onClick={onLike}>
          Curtir
        </Button>
        <Button size="sm" onClick={onViewProfile}>
          Ver perfil
        </Button>
      </div>
    </div>
  );
}
