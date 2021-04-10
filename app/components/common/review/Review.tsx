import * as React from "react"

import classes from "@/styles/modules/components/common/Review.module.sass"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ReviewInterface } from "@/interfaces/review"

interface ReviewProps {
  review: ReviewInterface
}

const Review: React.FC<ReviewProps> = ({ review }: ReviewProps) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(<FontAwesomeIcon
      key={i}
      className={`${classes.star} ${i < review.stars ? classes.filled : ""}`}
      icon="star"
    />)
  }

  return (
    <div className={classes.review}>
      <div className={classes.stars}>
        {stars}
      </div>
      <h4 className={classes.title}>{review.title}</h4>
      <p className={classes.content}>{review.content}</p>
      <div className={classes.author}>
        <div className={classes.wrapper}>
          <img className={classes.avatar} src={review.author.avatar} alt=""/>
          <div className={classes.info}>
            <h5 className={classes.name}>{review.author.name}</h5>
            <p className={classes.about}>{review.author.about}</p>
          </div>
        </div>
        <div className={classes.arrows}>
          <div className={`${classes.left} ${classes.selected}`}>
            <FontAwesomeIcon icon="arrow-left" />
          </div>
          <div className={classes.line}> </div>
          <div className={classes.right}>
            <FontAwesomeIcon icon="arrow-right" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
