import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { tech_wd,tech_lang } from '../../constants/constants';
import { GridContainer, TitleContent } from '../Projects/ProjectsStyles';

const Technologies = () =>  (
 <Section id="Skills">
   <SectionDivider/>
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     <h3>Languages and Library</h3>
     </SectionText>

    <List>
    {tech_lang.map( (tech) => (
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
        <ListTitle>{tech.title}</ListTitle>
        <ListParagraph>
          {tech.tech}
        </ListParagraph>
        </ListContainer>
      </ListItem>
    ))}
    </List>
      <br/>
    <SectionText>
     <h3>Web Development</h3>
     </SectionText>

    <List>
    {tech_wd.map( (tech) => (
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
        <ListTitle>{tech.title}</ListTitle>
        <ListParagraph>
          {tech.tech}
        </ListParagraph>
        </ListContainer>
      </ListItem>
    ))}
    </List>
   
 </Section>
);

export default Technologies;
