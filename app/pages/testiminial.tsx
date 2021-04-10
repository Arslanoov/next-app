import * as React from "react"
import { useState } from "react"

import classes from "@/styles/modules/pages/Testiminial.module.sass"

import MainLayout from "@/layouts/main"

import Map from "@/components/common/map/Map"
import Review from "@/components/common/review/Review"

const Features: React.FC = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "User friendly & Customizable",
      stars: 5,
      content: "Bring to the table win-win survival strategies to ensure proactive domination. " +
        "At the end of the day, going forward, a new normal that has evolved from generation X is " +
        "on the runway heading towards a streamlined cloud solution. User generated content in real-time " +
        "will have multiple touchpoints for offshoring.",
      author: {
        avatar: "/assets/images/review/author.png",
        name: "Zoltan Nemeth",
        about: "CEO of Pixler Lab"
      }
    }
  ])

  return (
    <MainLayout title="Testiminial">
      <div className="container">
        <div className={classes.section}>
          <div className={classes.map}>
            <Map />
          </div>
          <div className={classes.content}>
            <h2 className={classes.title}>Meet Client Satisfaction by using product</h2>
            <p className={classes.description}>
              The rise of mobile devices transforms the way we consume.
              elevant channels such as Facebook.
            </p>
            {reviews.map(review => <Review key={review.id} review={review} />)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Features
