import { getData } from "@/app/actions";
import { Component } from "./component";

interface DataComponentProps {
  color: string;
  name: "A" | "B";
}
export async function DataComponent({ color, name }: DataComponentProps) {
  //gets initial data
  const data = await getData(name);
  return (
    <Component color={color} data={data} />
  );
}
