import React, { useState } from "react";
import { Container, Header, Entity, Inner, Question, Text } from "./faqStyle.jsx";

const QuestionContext = React.createContext();
export default function Faq({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Faq.Header = function FaqHeader({ children, ...restProps }) {
  return <Header {...restProps}> {children}</Header>;
};
Faq.Entity = function FaqEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <Entity {...restProps}> {children}</Entity>
    </QuestionContext.Provider>
  );
};
Faq.Question = function FaqHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <Question onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <h5>^</h5> : <h3>+</h3>}
    </Question>
  );
};
Faq.Text = function FaqText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? <Text {...restProps}>{children}</Text> : null;
};