import React from 'react';
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
export default function Welcome({active, btnClicked}) {
  return (
    <Section>
      <H1>kittens<Span> VS </Span>robots</H1>
      <Button onClick={() => btnClicked('Новая игра')} isActive = {active === 'Зал славы'}>Новая игра</Button>
      <Button onClick={() => btnClicked('Правила')} isActive = {active === 'Правила'}>Правила</Button>
      <Button onClick={() => btnClicked('Зал славы')} isActive = {active === 'Зал славы'}>Зал славы</Button>
    </Section>
  );
}
