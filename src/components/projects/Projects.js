import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

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
          src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.15752-9/420150386_400919379108739_3106281922002650535_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=KwArpfn_BJQAX_Sy1pJ&_nc_ht=scontent.fsgn5-11.fna&oh=03_AdSDliaaJESf9jLedmT94p-xa8dnBfjxqcZHnW1NuTmQog&oe=65DBE95A"
          deploy="https://watch-client-project.vercel.app/"
          github="https://github.com/ducphap1311/watch-project"
        />
        <ProjectsCard
          title="Todo App"
          des="An app for people to list tasks need to do"
          src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/419540621_688717856768148_5566317971218660911_n.png?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=UyTLCKhMGF4AX-q2zSJ&_nc_ht=scontent.fsgn5-9.fna&oh=03_AdQpknFT93riHmFoiAFmdxnQd3PAwI7x_w2WB62RuvaUjQ&oe=65DC6679"
          deploy="https://todo-app-ducphap.vercel.app/"
          github="https://github.com/ducphap1311/Todo-App"
        />
      </div>
    </section>
  );
}

export default Projects