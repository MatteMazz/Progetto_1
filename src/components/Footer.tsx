import styled from "styled-components";

const FooterBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: right;
  padding: 20px;
  background-color: #bdbdbd;
`;

const FooterLink = styled.a`
  color: #1976d2;
  font-size: 0.8rem;
`;

export const Footer: React.FC = () => {
  return (
    <FooterBar>
      <FooterLink href="https://twitter.com/?lang=it" target="_blank">
        TWITTER |{" "}
      </FooterLink>
      <FooterLink href="https://www.facebook.com/" target="_blank">
        FACEBOOK  
      </FooterLink>
    </FooterBar>
  );
};
