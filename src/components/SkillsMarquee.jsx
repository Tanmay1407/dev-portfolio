import React from 'react';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Java', icon: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
  { name: 'Spring Boot', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
  { name: 'DSA', icon: 'https://cdn-icons-png.flaticon.com/512/9173/9173561.png' },
  { name: 'Gen AI', icon: 'https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg' },
  { name: 'MCP', icon: 'https://cdn-icons-png.flaticon.com/512/8002/8002121.png' },
  { name: 'Ollama', icon: 'https://avatars.githubusercontent.com/u/124478244?s=200&v=4' },
  { name: 'SQL', icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' },
  { name: 'CI/CD', icon: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
  { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
];

export default function SkillsMarquee() {
  return (
    <div className="space-y-4 mt-8">
      <div className="marquee">
        <div className="marquee-content">
          {[...skills, ...skills].map((s, i) => (
            <span key={`m1-${i}`} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <img src={s.icon} alt={s.name} className="h-5 w-5" />
              {s.name}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee marquee-reverse">
        <div className="marquee-content">
          {[...skills, ...skills].map((s, i) => (
            <span key={`m2-${i}`} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <img src={s.icon} alt={s.name} className="h-5 w-5" />
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
