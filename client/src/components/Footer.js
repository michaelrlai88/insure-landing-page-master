import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const maxWidth = '999px';
const minWidth = '1000px';

const abc = styled.div`
  @media screen and (max-width: ${maxWidth}) {
  }
  @media screen and (min-width: ${minWidth}) {
  }
`;

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: hsl(0, 0%, 98%);
  @media screen and (max-width: ${maxWidth}) {
    display: ${(prop) => (!prop.menuProp ? 'block' : 'none')};
    padding: 0 20px 50px 20px;
  }
  @media screen and (min-width: ${minWidth}) {
    padding: 60px 150px 40px 150px;
  }
`;

const FooterWatermark = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
  z-index: 0;
  @media screen and (max-width: ${maxWidth}) {
  }
  @media screen and (min-width: ${minWidth}) {
  }
`;

const FooterWatermarkMobile = styled.div`
  @media screen and (max-width: 375px) {
    display: block;
  }
  @media screen and (min-width: 376px) {
    display: none;
  }
`;

const FooterWatermarkDesktop = styled.div`
  @media screen and (max-width: 375px) {
    display: none;
  }
  @media screen and (min-width: 376px) {
    display: block;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  @media screen and (max-width: ${maxWidth}) {
    text-align: center;
    padding-top: 80px;
  }
  @media screen and (min-width: ${minWidth}) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const Logos = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${minWidth}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

const Company = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${minWidth}) {
  }
`;

const Social = styled.div`
  svg {
    margin: 0 8px;
  }
  @media screen and (max-width: ${maxWidth}) {
  }
  @media screen and (min-width: ${minWidth}) {
  }
`;

const HorizontalLine = styled.div`
  border-top: 1px solid hsl(273, 4%, 51%);
  @media screen and (max-width: ${maxWidth}) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: ${minWidth}) {
    margin-bottom: 30px;
  }
`;

const Nav = styled.div`
  @media screen and (max-width: ${maxWidth}) {
  }
  @media screen and (min-width: ${minWidth}) {
    display: flex;
    justify-content: space-between;
  }
`;

const Section = styled.div`
  @media screen and (max-width: ${maxWidth}) {
    margin-bottom: 30px;
  }
  @media screen and (min-width: ${minWidth}) {
    width: 300px;
  }
`;

const SectionTitle = styled.div`
  color: hsl(273, 4%, 51%);
  text-transform: uppercase;
  @media screen and (max-width: ${maxWidth}) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${minWidth}) {
    margin-bottom: 25px;
  }
`;

const List = styled.ul`
  list-style-type: none;
  @media screen and (max-width: ${maxWidth}) {
  }
  @media screen and (min-width: ${minWidth}) {
  }
`;

const ListItem = styled.li`
  color: hsl(256, 26%, 20%);
  text-transform: uppercase;
  margin-bottom: 8px;

  padding: 0;
  @media screen and (max-width: ${maxWidth}) {
  }
  @media screen and (min-width: ${minWidth}) {
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: hsl(256, 26%, 20%);
`;

const Footer = () => {
  const navOpen = useSelector((state) => state.nav.navOpen);

  return (
    <OuterContainer menuProp={navOpen}>
      <FooterWatermark>
        <FooterWatermarkMobile>
          <svg xmlns='http://www.w3.org/2000/svg' width='374' height='173'>
            <g fill='none' fill-rule='evenodd' stroke='#E4E4E4'>
              <path d='M72.361 139.675c75.703 23.693 153.543 63.212 233.235-8.97C385.29 58.523 435.39-4.709 403.036-86.522c-32.354-81.814-164.422-30.855-202.794-103.977-38.373-73.122 45.94-139.485 9.591-204.563-36.35-65.078-64.3-106.787-181.115-65.409C-88.098-419.092-77.327-313.807-166.16-252.153-254.993-190.499-351.104-98.2-219.206 66.494S-3.341 115.98 72.36 139.674z' />
              <path d='M62.895 101.751c61.583 19.24 124.905 51.33 189.734-7.283 64.828-58.614 105.585-109.959 79.266-176.393-26.32-66.434-133.755-25.055-164.971-84.43-31.216-59.377 37.372-113.266 7.802-166.11-29.57-52.845-52.306-86.713-147.334-53.113-95.028 33.6-86.267 119.094-158.53 169.158-72.265 50.064-150.45 125.012-43.153 258.747S1.312 82.511 62.895 101.751z' />
              <path d='M45.188 76.583C95.15 92.28 146.522 118.465 199.117 70.64c52.594-47.825 85.66-89.72 64.307-143.926-21.353-54.206-108.513-20.443-133.838-68.89-25.325-48.448 30.32-92.418 6.33-135.536-23.99-43.117-42.436-70.752-119.531-43.336-77.095 27.415-69.987 97.173-128.614 138.022-58.627 40.85-122.058 102.003-35.009 211.122C-60.189 137.216-4.773 60.884 45.188 76.583z' />
              <path d='M26.684 45.816c40.295 12.596 81.728 33.603 124.147-4.768 42.419-38.371 69.087-71.984 51.865-115.475-17.221-43.491-87.518-16.402-107.943-55.273-20.425-38.87 24.453-74.148 5.105-108.743s-34.225-56.767-96.404-34.77c-62.179 21.996-56.446 77.965-103.73 110.739-47.284 32.774-98.442 81.839-28.236 169.388C-58.305 94.464-13.61 33.221 26.684 45.816z' />
              <path d='M21.917 25.954c32.91 10.295 66.749 27.467 101.393-3.897 34.643-31.365 56.424-58.84 42.358-94.389-14.065-35.549-71.477-13.407-88.158-45.179-16.682-31.772 19.971-60.609 4.17-88.886-15.803-28.277-27.953-46.4-78.735-28.42-50.782 17.979-46.1 63.727-84.718 90.516-38.617 26.79-80.398 66.895-23.06 138.457 57.339 71.562 93.841 21.503 126.75 31.798z' />
              <path d='M12.775 11.594c26.718 8.36 54.191 22.305 82.318-3.165 28.127-25.47 45.81-47.78 34.39-76.649-11.419-28.868-58.03-10.887-71.574-36.688-13.544-25.8 16.214-49.217 3.385-72.18-12.83-22.963-22.694-37.68-63.923-23.08-41.229 14.6-37.428 51.75-68.78 73.505-31.353 21.755-65.275 54.323-18.723 112.435C-43.579 43.884-13.944 3.234 12.775 11.594z' />
            </g>
          </svg>
        </FooterWatermarkMobile>
        <FooterWatermarkDesktop>
          <svg xmlns='http://www.w3.org/2000/svg' width='528' height='231'>
            <g fill='none' fill-rule='evenodd' stroke='#E4E4E4'>
              <path d='M186.361 197.675c75.703 23.693 153.543 63.212 233.235-8.97 79.693-72.182 129.794-135.414 97.44-217.227-32.354-81.814-164.422-30.855-202.794-103.977-38.373-73.122 45.94-139.485 9.591-204.563-36.35-65.078-64.3-106.787-181.115-65.409C25.902-361.092 36.673-255.807-52.16-194.153c-88.833 61.654-184.944 153.953-53.046 318.647s215.865 49.487 291.567 73.18z' />
              <path d='M176.895 159.751c61.583 19.24 124.905 51.33 189.734-7.283 64.828-58.614 105.585-109.959 79.266-176.393-26.32-66.434-133.755-25.055-164.971-84.43-31.216-59.377 37.372-113.266 7.802-166.11-29.57-52.845-52.306-86.713-147.334-53.113-95.028 33.6-86.267 119.094-158.53 169.158-72.265 50.064-150.45 125.012-43.153 258.747s175.603 40.184 237.186 59.424z' />
              <path d='M159.188 134.583c49.962 15.698 101.334 41.882 153.929-5.943 52.594-47.825 85.66-89.72 64.307-143.926-21.353-54.206-108.513-20.443-133.838-68.89-25.325-48.448 30.32-92.418 6.33-135.536-23.99-43.117-42.436-70.752-119.531-43.336C53.29-235.633 60.398-165.875 1.77-125.026-56.856-84.176-120.287-23.023-33.238 86.096c87.049 109.12 142.465 32.788 192.426 48.487z' />
              <path d='M140.684 103.816c40.295 12.596 81.728 33.603 124.147-4.768 42.419-38.371 69.087-71.984 51.865-115.475-17.221-43.491-87.518-16.402-107.943-55.273-20.425-38.87 24.453-74.148 5.105-108.743s-34.225-56.767-96.404-34.77c-62.179 21.996-56.446 77.965-103.73 110.739C-33.56-71.7-84.718-22.635-14.512 64.914c70.207 87.55 114.901 26.307 155.196 38.902z' />
              <path d='M135.917 83.954c32.91 10.295 66.749 27.467 101.393-3.897 34.643-31.365 56.424-58.84 42.358-94.389-14.065-35.549-71.477-13.407-88.158-45.179-16.682-31.772 19.971-60.609 4.17-88.886-15.803-28.277-27.953-46.4-78.735-28.42-50.782 17.979-46.1 63.727-84.718 90.516C-6.39-59.51-48.17-19.406 9.167 52.156c57.339 71.562 93.841 21.503 126.75 31.798z' />
              <path d='M126.775 69.594c26.718 8.36 54.191 22.305 82.318-3.165 28.127-25.47 45.81-47.78 34.39-76.649-11.419-28.868-58.03-10.887-71.574-36.688-13.544-25.8 16.214-49.217 3.385-72.18-12.83-22.963-22.694-37.68-63.923-23.08-41.229 14.6-37.428 51.75-68.78 73.505C11.238-46.908-22.684-14.34 23.868 43.772c46.553 58.112 76.188 17.462 102.907 25.822z' />
            </g>
          </svg>
        </FooterWatermarkDesktop>
      </FooterWatermark>
      <Content>
        <Logos>
          <Company>
            <svg xmlns='http://www.w3.org/2000/svg' width='112' height='18'>
              <path
                fill='#2C2830'
                d='M0 .224h3.578v17.53H0V.223zm8.086 0h3.555l10.923 5.72V.224h3.556v17.53h-3.556V9.711L11.641 4.026v13.727H8.086V.224zm23.81 12.314c.635.36 1.28.683 1.934.97.654.288 1.333.531 2.035.73.703.198 1.442.349 2.215.454.774.104 1.599.157 2.473.157 1.054 0 1.952-.07 2.692-.208.74-.138 1.344-.329 1.811-.572.467-.243.808-.533 1.02-.869.214-.336.32-.703.32-1.1 0-.635-.265-1.137-.796-1.507-.53-.37-1.35-.556-2.456-.556-.486 0-.998.032-1.537.096l-.811.1-.82.107a97.03 97.03 0 01-1.626.208c-.535.063-1.038.095-1.509.095-.785 0-1.538-.1-2.26-.303a5.98 5.98 0 01-1.917-.908 4.5 4.5 0 01-1.33-1.514c-.328-.606-.493-1.312-.493-2.12 0-.478.066-.953.196-1.424.131-.471.34-.922.628-1.352.288-.43.66-.83 1.116-1.2a6.682 6.682 0 011.655-.958c.646-.27 1.394-.48 2.243-.634.848-.153 1.814-.23 2.899-.23.785 0 1.573.043 2.366.129.792.086 1.564.207 2.316.364.751.157 1.475.346 2.17.567.695.22 1.342.465 1.94.734l-1.559 2.871a16.689 16.689 0 00-1.592-.6 18.789 18.789 0 00-1.783-.476 20.428 20.428 0 00-1.924-.32 17.169 17.169 0 00-2.024-.118c-.98 0-1.785.071-2.417.213-.632.143-1.135.324-1.508.544-.374.221-.634.468-.78.74a1.714 1.714 0 00-.219.814c0 .523.236.951.707 1.284.471.333 1.189.499 2.153.499.39 0 .836-.028 1.34-.084l.777-.089.816-.096a72.218 72.218 0 011.705-.185c.58-.056 1.142-.084 1.688-.084 1.031 0 1.945.115 2.742.347.796.232 1.463.563 2.001.993.539.43.946.95 1.223 1.559.277.609.415 1.291.415 2.046 0 1.01-.234 1.909-.701 2.698-.467.788-1.133 1.454-1.996 1.996-.864.542-1.905.953-3.124 1.233-1.218.28-2.575.421-4.07.421-.988 0-1.952-.062-2.894-.185a21.57 21.57 0 01-2.709-.527 20.3 20.3 0 01-2.467-.819A17.998 17.998 0 0130 15.421l1.895-2.883zM53.382.224h3.555V9.88c0 .793.109 1.498.326 2.114.216.617.54 1.139.97 1.565.43.426.962.75 1.598.97.635.22 1.375.33 2.22.33.838 0 1.576-.11 2.215-.33.64-.22 1.174-.544 1.604-.97.43-.426.753-.948.97-1.565.217-.616.325-1.321.325-2.114V.224h3.555v10.083c0 1.15-.194 2.198-.583 3.14a6.668 6.668 0 01-1.693 2.422c-.74.673-1.647 1.193-2.72 1.559-1.073.366-2.297.55-3.673.55-1.375 0-2.6-.184-3.673-.55-1.072-.366-1.979-.886-2.72-1.559a6.668 6.668 0 01-1.693-2.422c-.388-.942-.583-1.99-.583-3.14V.224zm21.667 0h8.916c1.346 0 2.513.14 3.5.42.986.281 1.805.687 2.455 1.218a4.907 4.907 0 011.453 1.94c.318.762.476 1.626.476 2.59 0 .651-.078 1.27-.235 1.857a5.512 5.512 0 01-.723 1.62 5.526 5.526 0 01-1.228 1.318 6.677 6.677 0 01-1.739.959l3.813 5.607h-4.351l-3.297-4.98-5.484-.01v4.99H75.05V.224zm9.006 9.466c.673 0 1.262-.079 1.766-.236.505-.157.928-.377 1.268-.661.34-.285.594-.63.762-1.038a3.54 3.54 0 00.253-1.362c0-.98-.337-1.737-1.01-2.272-.673-.534-1.686-.801-3.039-.801h-5.45v6.37h5.45zm12-9.466h14.927v3.118H99.611v3.5h10.071v2.926h-10.07v4.879h11.607v3.106H96.056V.224z'
              />
            </svg>
          </Company>
          <Social>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
              <path
                fill='#837D88'
                d='M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z'
              />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='20'>
              <path
                fill='#837D88'
                d='M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z'
              />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
              <path
                fill='#837D88'
                d='M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z'
              />
            </svg>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
              <path
                fill='#837D88'
                d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
              />
            </svg>
          </Social>
        </Logos>
        <HorizontalLine></HorizontalLine>
        <Nav>
          <Section>
            <SectionTitle>Our company</SectionTitle>
            <List>
              <ListItem>
                <Link href='/'>How we work</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Why Insure?</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>View plans</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Reviews</Link>
              </ListItem>
            </List>
          </Section>
          <Section>
            <SectionTitle>Help me</SectionTitle>
            <List>
              <ListItem>
                <Link href='/'>FAQ</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Terms of use</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Privacy policy</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Cookies</Link>
              </ListItem>
            </List>
          </Section>
          <Section>
            <SectionTitle>Contact</SectionTitle>
            <List>
              <ListItem>
                <Link href='/'>Sales</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Support</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Live chat</Link>
              </ListItem>
            </List>
          </Section>
          <Section>
            <SectionTitle>Others</SectionTitle>
            <List>
              <ListItem>
                <Link href='/'>Careers</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Press</Link>
              </ListItem>
              <ListItem>
                <Link href='/'>Licenses</Link>
              </ListItem>
            </List>
          </Section>
        </Nav>
      </Content>
    </OuterContainer>
  );
};

export default Footer;
