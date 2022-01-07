import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const Projects = () => (
  <Section nopadding id="Projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
  <GridContainer>
    {projects.map( (project) => (
      <BlogCard key={project.id}>
        <img src={project.image} width="250" height="200"/>
        <TitleContent>
          <HeaderThree title>{project.title}</HeaderThree>
        </TitleContent>
        <CardInfo>{project.description}</CardInfo>
      <div>
        <TitleContent>Stack</TitleContent>
        <TagList>
          {
            project.tags.map((tag,i)=> (
              <Tag key={i}>{tag}</Tag>
            ))
          }
        </TagList>
      </div>
      <UtilityList>
        <ExternalLinks href={project.source}>Code Link</ExternalLinks>
      </UtilityList>
      </BlogCard>
    ))}
  </GridContainer>
  </Section>
);

export default Projects;