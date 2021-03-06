/**
 *
 * Footer
 *
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Link } from '../../components/Link/Loadable';
import { useBreakpoint, media } from 'styles/media';
import { Footer as FooterComp } from '../../components/Footer/Loadable';
import { TextLogo } from '../../components/TextLogo/Loadable';
import { translations } from 'locales/i18n';
export function Footer() {
  const { t } = useTranslation();
  const bp = useBreakpoint();
  const isS = bp === 's';

  const left = [<TextLogo key="logo" />];

  const websiteLink = (
    <Link className="footer-link" href="https://confluxnetwork.org">
      {t(translations.footer.confluxnetwork)}
    </Link>
  );
  const portalLink = (
    <Link className="footer-link" href="https://portal.conflux-chain.org">
      {t(translations.footer.confluxportal)}
    </Link>
  );
  const bountyLink = (
    <Link className="footer-link" href="https://bounty.conflux-chain.org">
      {t(translations.footer.confluxbounty)}
    </Link>
  );

  const icons = (
    <FooterContentIconWrapper>
      <FooterContentIconLink key="1">
        <Link href="https://twitter.com/Conflux_Network">
          <img alt="twitter icon" src="/icon-twitter.svg" />
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink key="2">
        <Link href="https://github.com/conflux-chain">
          <img alt="github icon" src="/icon-github.svg" />
        </Link>
      </FooterContentIconLink>
      <FooterContentIconLink key="3">
        <Link href="https://medium.com/conflux-network">
          <img alt="medium icon" src="/icon-medium.svg" />
        </Link>
      </FooterContentIconLink>
    </FooterContentIconWrapper>
  );

  const rightTop = [
    <FooterWrapper key="right-top">
      <FooterContentTitle key="title">
        {t(translations.footer.product)}
      </FooterContentTitle>
      {!isS && (
        <FooterContent key="content">
          <FooterContentRow>
            <FooterContentLink key="1">{websiteLink}</FooterContentLink>
            <FooterContentLink key="2">{portalLink}</FooterContentLink>
            <FooterContentLink key="3">{bountyLink}</FooterContentLink>
          </FooterContentRow>
        </FooterContent>
      )}
      {isS && (
        <FooterContent key="content">
          <FooterContentRow key="1">
            <FooterContentLink key="1">{websiteLink}</FooterContentLink>
            <FooterContentLink key="2">{portalLink}</FooterContentLink>
            <FooterContentLink key="3">{bountyLink}</FooterContentLink>
          </FooterContentRow>
        </FooterContent>
      )}
      <FooterContentRow>{icons}</FooterContentRow>
    </FooterWrapper>,
  ];
  const rightBottom = [
    <CopyRight key="copyright">{t(translations.footer.copryRight)}</CopyRight>,
  ];

  return (
    <FooterComp left={left} rightTop={rightTop} rightBottom={rightBottom} />
  );
}

// wrapper
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// left
// const FooterDescription = styled.p`
//   font-size: 0.86rem;
//   max-width: 8.59rem;
// `;

// right top
const FooterContentTitle = styled.span`
  margin-bottom: 1.07rem;
  font-weight: 600;
  color: #000558;

  ${media.s} {
    margin-bottom: 0.86rem;
  }
`;
const FooterContent = styled.div`
  font-size: 0.86rem;
  display: flex;
  flex-direction: row;
`;

const FooterContentRow = styled.div`
  display: flex;
  flex-direction: row;
`;
// const FooterContentColumn = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const FooterContentLink = styled.span`
  .link.footer-link {
    color: black;
    font-size: 0.86rem;
    margin-right: 2rem;
  }

  ${media.s} {
    .link.footer-link {
      font-size: 0.71rem;
    }
  }
`;
const FooterContentIconWrapper = styled.div`
  margin-top: 1.14rem;
`;
const FooterContentIconLink = styled.span`
  margin-right: 0.57rem;
  img {
    width: 1rem;
  }

  ${media.s} {
    margin-top: 0.86rem;
  }
`;

const CopyRight = styled.span`
  opacity: 0.38;

  ${media.s} {
    font-size: 0.71rem;
  }
`;
