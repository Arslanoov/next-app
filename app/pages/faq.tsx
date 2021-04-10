import * as React from "react"
import { useState } from "react"

import classes from "@/styles/modules/pages/Faq.module.sass"

import MainLayout from "@/layouts/main"
import QuestionAnswer from "@/components/common/question-answer/QuestionAnswer";

const Faq: React.FC = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      question: "How to contact with riders emergency?",
      answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. " +
        "Iterative approaches to corporate strategy foster collaborative thinking to further the" +
        " overall value proposition. Organically grow the holistic world view of disruptive innovation " +
        "via workplace diversity and empowerment." +
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end " +
        "of the day, going forward, a new normal that has evolved from generation X is on the runway " +
        "heading towards a streamlined cloud solution. User generated content in real-time will have " +
        "multiple touchpoints for offshoring."
    },
    {
      id: 2,
      question: "App installation failed, how to update system information?",
      answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. " +
        "Iterative approaches to corporate strategy foster collaborative thinking to further the" +
        " overall value proposition. Organically grow the holistic world view of disruptive innovation " +
        "via workplace diversity and empowerment." +
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end " +
        "of the day, going forward, a new normal that has evolved from generation X is on the runway " +
        "heading towards a streamlined cloud solution. User generated content in real-time will have " +
        "multiple touchpoints for offshoring."
    },
    {
      id: 3,
      question: "Website response taking time, how to improve?",
      answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. " +
        "Iterative approaches to corporate strategy foster collaborative thinking to further the" +
        " overall value proposition. Organically grow the holistic world view of disruptive innovation " +
        "via workplace diversity and empowerment." +
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end " +
        "of the day, going forward, a new normal that has evolved from generation X is on the runway " +
        "heading towards a streamlined cloud solution. User generated content in real-time will have " +
        "multiple touchpoints for offshoring."
    },
    {
      id: 4,
      question: "New update fixed all bug and issues",
      answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. " +
        "Iterative approaches to corporate strategy foster collaborative thinking to further the" +
        " overall value proposition. Organically grow the holistic world view of disruptive innovation " +
        "via workplace diversity and empowerment." +
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end " +
        "of the day, going forward, a new normal that has evolved from generation X is on the runway " +
        "heading towards a streamlined cloud solution. User generated content in real-time will have " +
        "multiple touchpoints for offshoring."
    },
    {
      id: 5,
      question: "How to contact with riders emergency?",
      answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. " +
        "Iterative approaches to corporate strategy foster collaborative thinking to further the" +
        " overall value proposition. Organically grow the holistic world view of disruptive innovation " +
        "via workplace diversity and empowerment." +
        "Bring to the table win-win survival strategies to ensure proactive domination. At the end " +
        "of the day, going forward, a new normal that has evolved from generation X is on the runway " +
        "heading towards a streamlined cloud solution. User generated content in real-time will have " +
        "multiple touchpoints for offshoring."
    }
  ])

  return (
    <MainLayout title="FAQ">
      <div className="container">
        <div className={classes.section}>
          <div className={classes.info}>
            <h2 className={classes.title}>Frequently asked questions</h2>
            <p className={classes.description}>
              The rise of mobile devices transforms the way we consume information entirely
              and the world&apos;s most elevant channels such as Facebook.
            </p>
          </div>
          <div className={classes.questions}>
            {items.map(item => <div key={item.id} className={classes.question}>
              <QuestionAnswer key={item.id} item={item} />
            </div>)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Faq
