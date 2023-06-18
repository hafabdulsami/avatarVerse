import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../public/Pngs/LogoWhite.png";

export const Button = styled.button`
  border-radius: 50px;
  background: #000;

  color: #fff;
  font-size: 16px;

  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  width: 150px;
  height: 45px;
  position: absolute;
  top: 350px;
  left: 70px;

  &:hover {
    border: 2px solid black;
    background: #fff;
    color: #000000;
    cursor: pointer;
  }
`;

export const Button2 = styled.button`
  border-radius: 50px;
  border: 2px solid black;
  background: #fff;
  color: #000000;
  font-size: 16px;

  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  width: 150px;
  height: 45px;
  position: absolute;
  top: 350px;
  left: 235px;
  zIndex: "10000"
  cursor: pointer;

  &:hover {
    border: 2px solid black;
    background: #fff;
    color: #000000;
    cursor: pointer;
  }
`;

const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: "poppins";
  font-size: 4em;
  line-height: 0.74em;
  color: #000000;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  padding: 100px;
  white-space: nowrap;
  font-family: "poppins";
  line-height: 1em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`;

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #000000;
  color: #ffe7e7;
`;

const Sub = styled.div`
  align-self: end;
  width: 200px;
  height: 2px;
  background: #000000;
`;

const Jumbo = styled.div`
  align-self: center;
  padding: 100px;
  font-size: 3.5em;
  color: #ffffff;
`;

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: "ThunderThin";
  font-size: 0.2em;
  line-height: 1em;
  color: #ffffff;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`;
const WelcomeText = styled.div`
  font-size: 50px;
`;
const AvatarText = styled.div`
  font-size: 35px;
  font-family: "poppins";
  position: absolute;
  top: 170px;
  left: 100px;
`;
const ParaText = styled.div`
  font-size: 20px;
  font-family: "open sans";
  color: grey;
  position: absolute;
  top: 220px;
  left: 100px;
`;
const ParaText2 = styled.div`
  font-size: 20px;
  font-family: "open sans";
  color: grey;
  position: absolute;
  top: 244px;
  left: 100px;
`;
const ParaText3 = styled.div`
  font-size: 20px;
  font-family: "open sans";
  color: grey;
  position: absolute;
  top: 268px;
  left: 100px;
`;
export default function Underlay() {
  return (
    <Grid>
      <Left>
        <WelcomeText>Welcome To</WelcomeText>

        <AvatarText>AvatarVerse !</AvatarText>
        <ParaText>Welcome to AvatarVerse - a social media platform </ParaText>
        <ParaText2>
          where you can create your own 3D avatar and connect
        </ParaText2>
        <ParaText3> with friends in a whole new way.</ParaText3>
        <Button>Get Started</Button>
        <Link to="/page2">
          <Button2>Register Now</Button2>
        </Link>

        <Sub></Sub>
      </Left>
      <Right>
        <img
          src={logo}
          alt="logo"
          style={{ width: "550px", height: "550px" }}
        />
      </Right>
    </Grid>
  );
}
