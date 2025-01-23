import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Full-Stack Developer",
  "MERN Stack",
  "PostgreSQL",
  "Django Developer",
  "Mobile App Creator",
  "Flutter",
  "Supabase",
  "IoT Enthusiast",
];

const ChangingRole = () => {
     const [index, setIndex] = React.useState(0);

     React.useEffect(() => {
       const intervalId = setInterval(
         () => setIndex((index) => index + 1),
         3000 // every 3 seconds
       );
       return () => clearTimeout(intervalId);
     }, []);

  return (
    <TextTransition springConfig={presets.wobbly}>
      {TEXTS[index % TEXTS.length]}
    </TextTransition>
  );
}

export default ChangingRole;