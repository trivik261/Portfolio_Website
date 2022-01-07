import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
     <LeftSection>
       <SectionTitle main center>
        Hello World!<br/>
        This is Sharan SK <br/>
       </SectionTitle>
       <SectionText>
        Welcome to Portfolio Website.Take a peek at the info about me and the projects that I have done so far.
       </SectionText>
       <Button onClick={() => window.location="https://drive.google.com/file/d/1ZhuNdIO88TxyMOiMCgCqz5sGRRTUoNDE/view?usp=sharing"}>Download My Resume</Button>
     </LeftSection>
   </Section>
);

export default Hero;