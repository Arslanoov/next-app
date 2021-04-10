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
    }
  ])

  return (
    <MainLayout title="FAQ">
      <div className="container">
        <div className={classes.section}>
          {items.map(item => <QuestionAnswer key={item.id} item={item} />)}
        </div>
      </div>
    </MainLayout>
  )
}

export default Faq
