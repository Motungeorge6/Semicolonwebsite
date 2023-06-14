import React from 'react'
import Hero from "./IndividualHero"
import WhySemicolon from './WhySemicolon';
import LearnSpace from './LearnSpace';
import WhatULearn from './WhatULearn';
import ApplicatonProcess from './ApplicatonProcess';
import StudentJobs from './StudentJobs';
import Alumi from './Alumni';
import Faq from './faq';
import { FaqContent } from './faqContent';
import Testimonies from "../../home/component/Testimonies"
import KickStart from './KickStart';
import TrainingPrograms from './WhatULearn';

const individualsPage = () => {

  const slide = [
    <div>Slide 1 Content</div>,
    <div>Slide 2 Content</div>,
    <div>Slide 3 Content</div>
  ];
  return (
    <div>
      <Hero/>
      <WhySemicolon/>
      <TrainingPrograms slides={slide} />
      <LearnSpace/>
      <ApplicatonProcess/>
      <Alumi/>
      <StudentJobs/>
      <Faq>
        <Faq.Header>Frequently Asked Questions</Faq.Header>
        {FaqContent.map((question) => (
          <Faq.Entity key={question.id}>
            <Faq.Question>{question.question}</Faq.Question>
            <Faq.Text>{question.answer}</Faq.Text>
          </Faq.Entity>
        ))}
      </Faq>
      <Testimonies
         body="“Semicolon really pushed me to my limits. I had to go the extra mile—reading, researching—and it really did pan out for me in the long run. I learned a lot of things and can do so many things”" 
                      name="Increase (Cohort 9)"
                      img=""
      />
      <KickStart/>
    </div>
  )
}

export default individualsPage;
