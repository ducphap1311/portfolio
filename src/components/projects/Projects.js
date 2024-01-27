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
        />
      </div>
    </section>
  );
}

export default Projects