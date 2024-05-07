import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import watch from '../../assets/watch.jpg'
import music from '../../assets/music.png'
import admin from '../../assets/admin.png'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des="An e-commerce website, which users can order, select their favorite watches. I built this website to apply for what I learned."
          src={watch}
          deploy="https://watch-client-project.vercel.app/"
          github="https://github.com/ducphap1311/watch-project"
        />
        <ProjectsCard
          title="Music Player"
          des="Designed and implemented a music player application from scratch, allowing users to search, listen to music, and manage their playlists effortlessly"
          src={music}
          deploy="https://musicit-player.vercel.app/"
          github="https://github.com/ducphap1311/musicit-player"
        />
        <ProjectsCard
          title="Admin Dashboard"
          des="Developed an admin panel featuring authentication and product management, including CRUD operations for categories, products, multi-language support, and dark mode for enhanced user experience."
          src={admin}
          // deploy=""
          github="https://github.com/ducphap1311/admin-dashboard"
        />
      </div>
    </section>
  );
}

export default Projects