import { Card } from "flowbite-react";

interface CardProps {
  description: string
  title:string
}

export const CardCustom: React.FC<CardProps> = ({title, description}) => {
  return (
    <Card href="#" className="max-w-sm">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {description}
    </p>
  </Card>
  );
}