import { Lollipop, Milk, Wine } from "lucide-react";
import { ReactNode } from "react";

interface iAppProps {
  name: string;
  title: string;
  image: ReactNode;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "juice",
    title: "Juice",
    image: <Wine />
  },
  {
    id: 1,
    name: "milk",
    title: "Milk",
    image: <Milk />,
  },
  {
    id: 2,
    name: "candie",
    title: "Candie",
    image: <Lollipop />,
  },
] as const;