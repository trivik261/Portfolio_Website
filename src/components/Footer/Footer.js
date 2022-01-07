import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Primary Email</LinkTitle>
          <LinkItem href="mailto:sharansk18@gmail.com">sharansk18@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Secondary Email</LinkTitle>
          <LinkItem href="mailto:ced18i049@iiitdm.ac.in">ced18i049@iiitdm.ac.in</LinkItem>
        </LinkColumn>
      </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Sharan SK</Slogan>
      </CompanyContainer>
      <SocialIcons href="https://github.com/trivik261">
       <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sharan-sk/">
       <AiFillLinkedin size="3rem"/>
     </SocialIcons>
    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
