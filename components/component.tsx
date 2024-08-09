"use client";
import { Data, getData } from "@/app/actions";
import React, { useEffect, useState } from "react";

interface ComponentProps {
  data: Data;
  color: string;
}

export function Component({ data, color }: ComponentProps) {
  const [internalData, setInternalData] = useState<Data>(data);

  // fetches new data every 5 seconds
  useEffect(() => {
    const interval = setInterval(async () => {
      console.log("Client requesting data type:", data.type);
      const newData = await getData(data.type);
      console.log("Client got data:", newData);
      setInternalData(newData);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  return (
    <div
      className="grow text-center min-h-40 flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div>Data value: {internalData.value}</div>
      <div>
        Data status: {internalData.status === "processing" ? "⏳" : "✅"}{" "}
        {internalData.status}
      </div>
    </div>
  );
}
