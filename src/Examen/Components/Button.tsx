import { Button } from "flowbite-react";

interface ButtonProps {
  text: string;
  event_counter?: ()=> void;
}

export const ButtonCustom: React.FC<ButtonProps> = ({text, event_counter}) => {
  return (
    <Button onClick={event_counter}>{text}</Button>
  );
}