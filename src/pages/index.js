import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
import { Open_Sans } from '@next/font/google'
import Image from 'next/image'
import StyledComponentsRegistry from '../registry'
import GithubIcon from '../../public/github.svg'
import LinkedinIcon from '../../public/linkedin.svg'
import TwitterIcon from '../../public/twitter.svg'
import FacebookIcon from '../../public/facebook.svg'
import FlickrIcon from '../../public/flickr.svg'
import { Analytics } from '@vercel/analytics/react';

const openSans = Open_Sans({ subsets: ['latin'] })

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${openSans.style.fontFamily};
    height: 100%;
  }
  body {
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(226,240,254,1) 0%, rgba(255,247,228,1) 90% );
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #333;

  }
  strong {
    font-weight: 800;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

export default function Home() {
  return (
    <StyledComponentsRegistry>
      <>
        <GlobalStyle />
        <Head>
          <title>Dragoș Catarahia | Fullstack Engineer</title>
          <meta
            name="description"
            content="Fullstack engineer with extensive experience developing web applications and backend services. I enjoy helping teams improve the quality and performance of their systems."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <Container>
          <StyledHeaderLarge>Olá, my name is Dragoș</StyledHeaderLarge>
          <StyledParagraph>
            I am a full stack developer with over 10 years of experience working
            for various European and US startups.
          </StyledParagraph>

          <StyledParagraph>
            Throughout my career, I have focused on crafting high-quality
            solutions and approaching my work with <strong>simplicity</strong>,{' '}
            <strong>clarity</strong>, and <strong>empathy</strong>.
          </StyledParagraph>

          <StyledParagraph>
            In my free time, I enjoy spending time outdoors hiking and
            traveling.
          </StyledParagraph>
          <StyledParagraph>
            I currently call <Emojy>&#9968;</Emojy> Madeira, Portugal home.
          </StyledParagraph>
          <SocialLinks>
            <li>
              <a href="https://github.com/cdragos" title="Github">
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dragoscatarahia/"
                title="Linkedin"
              >
                <LinkedinIcon />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/dragoscatarahia" title="Twitter">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/dragos.catarahia"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.flickr.com/people/196376177@N07/"
                title="Flickr"
              >
                <FlickrIcon />
              </a>
            </li>
          </SocialLinks>
          <ProjectsContainer>
            <StyledHeaderMedium>Projects I've Worked On</StyledHeaderMedium>
            <ul>
              <li>
                <a href="https://stellar.health">Stellar Health</a> - This
                project aimed to improve quality and financial performance in
                healthcare by prompting providers and their care staff with
                recommended value-based actions and real-time payments at the
                point of care. The stack used included <em>Python</em>,{' '}
                <em>Django</em>, <em>Postgres</em>, and <em>React</em> with{' '}
                <em>Material UI</em>. The project was focused on creating a
                platform that could help payors, health systems, provider
                networks, and practicing physicians improve their performance by
                providing real-time insights and recommendations.
              </li>
              <li>
                <a href="https://www.indietravel.co/">indie Travel</a> - This
                project aimed to connect independent travel creators with
                travellers seeking unique experiences. The stack used included
                <em>React</em>, Redux, Elasticsearch, <em>Python</em>,{' '}
                <em>Django</em>, <em>NodeJS</em>, and <em>Docker</em>.
              </li>
              <li>
                <a href="https://reason.al/">Reasonal AI</a> - The goal of this
                project was to develop a solution that leveraged AI to optimize
                supply chain revenues. The stack included <em>Python</em>,{' '}
                <em>Django</em>, <em>Postgres</em>, <em>Celery</em>,{' '}
                <em>Redis</em>, and <em>Docker</em>.
              </li>
              <li>
                <a href="https://ogor.ro/">Ogor</a> - This project was focused
                on creating an agronomic analysis application based on satellite
                imagery. The stack used was <em>Python</em>, <em>Django</em>,{' '}
                <em>Django</em> Rest Framework, <em>Postgres</em>,{' '}
                <em>Celery</em>, and <em>Docker</em>.
              </li>
            </ul>
          </ProjectsContainer>
          <StyledFooter>
            <p>
              Crafted with <span>&#9829;</span> in Madeira, powerd by Next.js
              and Vercel.
            </p>
          </StyledFooter>
        </Container>
        <Analytics />
      </>
    </StyledComponentsRegistry>
  )
}
const Container = styled.main`
  margin: auto;
  padding-top: 40px;
  max-width: 960px;
  padding-left: 25px;
  padding-right: 25px;
`
const StyledParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 2rem;
  padding-bottom: 0px;
  max-width: 800px;
`

const StyledHeaderLarge = styled.h1`
  background: -webkit-linear-gradient(
      180deg,
      rgba(255, 0, 150, 0.45) 0%,
      transparent 70.079%,
      rgba(0, 124, 255, 0.57) 100%
    ),
    -webkit-linear-gradient(302deg, rgba(0, 35, 255, 0.22) 0%, rgba(
            66,
            0,
            255,
            0.69
          )
          29.475%, rgba(255, 0, 146, 0.43) 87.501%, transparent 100%),
    -webkit-linear-gradient(325deg, #ff0064 0%, #4100ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 40px;
`
const StyledHeaderMedium = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 40px;
`

const Emojy = styled.span`
  position: relative;
  top: -2px;
  padding-left: 2px;
`

const SocialLinks = styled.ul`
  display: inline-flex;
  padding-top: 24px;
  li {
    border: 1px solid rgba(51, 51, 51, 0.95);
    padding: 10px;
    display: inline-block;
    margin-right: 24px;
    width: 24px;
    height: 24px;
    img path {
      fill: rgba(51, 51, 51, 0.2);
      width: 100%;
      height: 100%;
    }
  }
`

const ProjectsContainer = styled.div`
  border-top: 1px solid rgba(51, 51, 51, 0.25);
  margin-top: 40px;
  padding-top: 20px;

  a {
    text-decoration: none;
    color: #4c44d7;
  }
  em {
    font-style: normal;
    text-decoration: underline;
    text-decoration-style: dashed;
  }
  li {
    padding-bottom: 20px;
  }
`
const StyledFooter = styled.footer`
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 0.8rem;
  color: rgba(51, 51, 51, 0.5);
  span {
    color: #ff0064;
  }
`
