// src/configs/data/skills.js
import {
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiCplusplus,
  SiHaskell,
  SiPython,
  SiJavascript,
  SiLinux,
  SiDocker,
  SiGithub,
  SiSecurityscorecard,
  SiShieldsdotio,
  SiKubernetes,
  SiExpress,
  SiMysql,
  SiTailwindcss
} from 'react-icons/si';

import {
  FaCode,
  FaRegFileCode,
  FaTerminal,
  FaReact,
  FaNodeJs,
  FaNetworkWired,
  FaRegistered,
  FaPython,
  FaShieldAlt
} from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';
import { TbCloudDataConnection, TbLoadBalancer } from 'react-icons/tb';
import { BsSpeedometer } from 'react-icons/bs';
import { MdArchitecture } from 'react-icons/md';
import { DiRedis } from 'react-icons/di';

export const SKILLS_DATA = [
  {
    id: "frontend",
    items: [
      { name: "react", icon: FaReact },
      { name: "javascript", icon: SiJavascript },
      { name: "typescript", icon: SiTypescript },
      { name: "tailwind", icon:  SiTailwindcss}
    ]
  },
  {
    id: "backend",
    items: [
      { name: "python", icon: FaPython },
      { name: "nodejs", icon: FaNodeJs },
      { name: "express", icon: SiExpress },
    ]
  },
  {
    id: "devops",
    items: [
      { name: "docker", icon: SiDocker },
      { name: "git", icon: SiGithub },
    ]
  },
  {
    id: "databases",
    items: [
      { name: "postgresql", icon: SiPostgresql },
      { name: "mysql", icon: SiMysql },
      { name: "mongodb", icon: SiMongodb },
      { name: "redis", icon: DiRedis }
    ]
  },
  {
    id: "testing",
    items: [
      { name: "jest" },
      { name: "playwright" }
    ]
  },
  {
    id: "other",
    items: [
      { name: "languages", icon: SiCplusplus },
    ]
  }
];
