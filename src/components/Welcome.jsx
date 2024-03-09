import { styled } from 'styled-components';

const Section = styled.section`
  background-color: rgb(77, 255, 246, 0.8);
  border: 2px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const H1 = styled.h1`
  margin: 50px auto 50px;
  text-align: center;
  font-weight: 600;
  width: 500px;
  color: darkblue;
  font-size: 4.2rem;
  background: white;
`
const Span = styled.span`
  color: #de771c;
  font-style: italic;
`
const Button = styled.button`
  width: 250px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  height: 50px;
  margin-bottom: 20px;
  padding: 0 40px;
  background-color: #de771c;
  color: white;
  font-size: 2.0rem;
  border: 0;
  outline: 0;
  cursor: pointer;
  border-radius: 5px;
  transition: .3s ease-in-out;
  &:hover {
    background: black;
    transition: background 100ms linear;
  }
`
function ButtonComponent({title}) {
  return (
    <Button>{title}</Button>
  );
}

const welcomeButtons = ["Новая игра", "Правила", "Зал славы"];

export default function Welcome() {
  const result = welcomeButtons.map((el, index) => {
    return <ButtonComponent key={index} title={el} />;
  });
  return (
    <Section>
      <H1>kittens<Span> VS </Span>robots</H1>
      {result}
    </Section>
  );
}
