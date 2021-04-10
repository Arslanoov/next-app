import * as React from "react"
import { useState } from "react"

import classes from "@/styles/modules/components/common/QuestionAnswer.module.sass"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { QuestionAnswerInterface } from "@/interfaces/question"

interface QuestionAnswerProps {
  item: QuestionAnswerInterface
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ item }: QuestionAnswerProps) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggle = (): void => setIsOpened(!isOpened)

  return (
    <div className={`${classes.item} ${isOpened ? classes.opened : ""}`}>
      <div
        className={classes.header}
        onClick={toggle}
        onKeyUp={() => {}}
        role="button"
        tabIndex={0}
      >
        <h5 className={classes.question}>{item.question}</h5>
        <div className={classes.add}>
          <FontAwesomeIcon icon="plus" />
        </div>
      </div>
      <p className={classes.answer}>{item.answer}</p>
    </div>
  )
}

export default QuestionAnswer
