'use client';

import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';
import ProjectDrawer from './components/ProjectDrawer';
import DesignPhilosophy from './components/DesignPhilosophy';
import { portfolioData } from '@/lib/data/portfolio';

import { ArrowRight } from 'lucide-react';

type ProjectCategory = 'all' | 'spatial' | 'digital';

export default function Home() {
  const { about, research, projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>('all');

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  // Filter projects by type and sort by order
  const filteredProjects = projects
    .filter(project => {
      if (categoryFilter === 'all') {
        return true;
      }
      return project.type === categoryFilter;
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] selection:bg-[var(--color-orange)] selection:text-white">
      <Navigation />

      <Hero />

      <ExperienceSection>
        <div id="about" className="space-y-8">
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <h2 className="text-lg font-bold uppercase tracking-[0.15em] text-[#CBF3BB] mb-8">{about.title}</h2>
            
            {/* English Version */}
            <div className="space-y-4 tracking-wider">
              {about.en.map((paragraph: string, index: number) => (
                <p key={`en-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>


        </div>
      </ExperienceSection>

      {/* <Section id="research" title="Research Areas">
        <div className="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {research.map((item) => (
            <div key={item.id} className="pt-8 md:pt-0 md:pl-8 first:pl-0">
              <div className="space-y-4">
                <span className="text-xs font-bold text-gray-400">0{item.id}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-xs font-bold tracking-[0.15em] text-gray-400 uppercase">{item.tags}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section> */}

      <DesignPhilosophy />

      <Section id="projects" title="Selected Projects">
        <div className="space-y-12">
          {/* Category Filter Controls */}
          <div className="flex gap-4 border-b border-gray-200 pb-4 overflow-x-auto">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`text-sm font-bold uppercase tracking-[0.15em] transition-colors whitespace-nowrap ${categoryFilter === 'all' ? 'text-[var(--color-orange)]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              All
            </button>
            <button
              onClick={() => setCategoryFilter('spatial')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'spatial' ? 'text-[var(--color-orange)]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Spatial
            </button>
            <button
              onClick={() => setCategoryFilter('digital')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${categoryFilter === 'digital' ? 'text-[var(--color-orange)]' : 'text-gray-400 hover:text-gray-600'}`}
            >
              Digital
            </button>
          </div>


          <div className="space-y-24 md:space-y-32">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                onClick={() => handleProjectClick(project)}
              >
                {/* Image Section */}
                <div className="w-full md:w-3/5 aspect-[4/3] bg-gray-100 overflow-hidden relative shadow-md transition-transform duration-500 group-hover:scale-[1.02]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={typeof project.title === 'string' ? project.title : project.titleObj?.zh || ''}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 group-hover:bg-[var(--color-orange)] transition-colors duration-500"></div>
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/5 space-y-6">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-orange)] mb-2">
                    <span>0{index + 1}</span>
                    <span className="w-8 h-px bg-[var(--color-orange)]"></span>
                    <span>{project.year}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold group-hover:text-[var(--color-orange)] transition-colors leading-tight">
                      {project.titleObj ? project.titleObj.zh : (typeof project.title === 'string' ? project.title : project.title.zh)}
                    </h3>
                    {project.titleObj && (
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-400">
                        {project.titleObj.en}
                      </h4>
                    )}
                  </div>

                  {(() => {
                    const subtitle = project.titleObj?.subtitle || (typeof project.title === 'object' ? project.title.subtitle : '');
                    if (!subtitle) return null;
                    // 分離中文和英文（假設格式為 "中文 英文"）
                    const parts = subtitle.split(/(?=[A-Za-z])/);
                    const zhPart = parts[0]?.trim() || '';
                    const enPart = parts.slice(1).join('').trim() || '';
                    return (
                      <div className="space-y-1">
                        {zhPart && <p className="text-xl text-gray-500 font-medium tracking-wider">{zhPart}</p>}
                        {enPart && <p className="text-base text-gray-400 font-medium tracking-wider">{enPart}</p>}
                      </div>
                    );
                  })()}

                  {/* Tags & Awards */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags && project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold text-gray-600 uppercase tracking-[0.15em] border border-gray-300 px-2 py-1 rounded-sm">
                        {tag}
                      </span>
                    ))}
                    {project.awards && project.awards.length > 0 && (
                      <span className="text-xs font-bold text-[var(--color-orange)] uppercase tracking-[0.15em] border border-[var(--color-orange)] px-2 py-1 rounded-sm">
                        Award Winner
                      </span>
                    )}
                  </div>

                  {(project as any).description && (
                    <div className="text-gray-600 leading-relaxed line-clamp-3">
                      {typeof (project as any).description === 'string' 
                        ? (project as any).description
                        : (
                            <div className="space-y-1">
                              {(project as any).description.zh && (
                                <p className="line-clamp-3">{(project as any).description.zh}</p>
                              )}
                            </div>
                          )
                      }
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-gray-900 group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Project</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Footer />

      <ProjectDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        project={selectedProject}
      />
    </main>
  );
}