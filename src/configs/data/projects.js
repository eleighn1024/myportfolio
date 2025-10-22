// src/configs/data/projects.js
import xhibitImg from '../../assets/xhibit.png';
import eventorImg from '../../assets/eventor.png';
import rightawayImg from '../../assets/raw.png';
import iotImg from '../../assets/ar.png';
import figmaUiChallengeImg from '../../assets/ui.png';
import todoAppImg from '../../assets/awe.png';
export const PROJECTS_DATA = [
  {
    id: "Xhibit",
    tech: [ "Supabase", "Express", "React", "Node.js"],
    link: "https://github.com/Xbit-arc",
    image: xhibitImg,
    imageCaption: "Xhibit screenshot"
  },
  {
    id: "Eventor",
    tech: [ "MongoDB", "Express", "React", "Node.js" ],
    link: "https://github.com/example/task-manager",
    image: eventorImg,
    imageCaption: "Eventor screenshot"
  },
  {
    id: "Right A Way",
    tech: [ "Figma" ],
    link3: "https://www.figma.com/design/cD2EHs7ejqofLkvhijdzGf/RAW-PROTOTYPE-No.1-Final-?node-id=0-1&t=vCNSAtJNEW4PqSp4-1",
    image: rightawayImg,
    imageCaption: "Right A Way Figma Design"
  },
  {
    id: "Development of an Arduino Uno-based Distance Measurement using Ultrasonic Sensor for Object Localization",
    tech: [ "IOT", "Arduino Uno", "Ultrasonic Sensor" ],
    link2: "https://drive.google.com/drive/folders/1AvuPuSz1hoOVHOMIftQs9RapIa6F3TAh?usp=sharing",
    image: iotImg,
    imageCaption: "Arduino Distance Measurement Project"
    
    },
    {
      id: "UI Challenge",
    tech: [ "Figma" ],
    link3: "https://www.figma.com/design/6U3cvy3IFrDUIr9IvfJLQ1/EleaBelleJabuen_UIChallenge1.jpg?node-id=0-1&t=CqrvijVQALjIRqVF-1",
    image: figmaUiChallengeImg,
    imageCaption: "UI Challenge Figma Design"
  },
 
{
      id: "Awesome Todos",
    tech: [ "MongoDB", "Express", "React", "Node.js" ],
    link4: "https://awesometodosappjabuen.onrender.com",
    image: todoAppImg,
    imageCaption: "Awesome Todos App Screenshot"
  },
];
