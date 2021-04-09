import * as React from "react"

import classes from "@/styles/modules/components/common/Map.module.sass"

const Map: React.FC = () => {
  return (
    <div className={classes.map}>
      <img src="/assets/images/review/map.png" className={classes.hidden} alt="" />

      <img src="/assets/images/review/people/1.png" className={classes.people} alt="" />
      <img src="/assets/images/review/people/2.png" className={classes.people} alt="" />
      <img src="/assets/images/review/people/3.png" className={classes.people} alt="" />
      <img src="/assets/images/review/people/4.png" className={classes.people} alt="" />
      <img src="/assets/images/review/people/5.png" className={classes.people} alt="" />
      <img src="/assets/images/review/people/6.png" className={classes.people} alt="" />
      <img src="/assets/images/review/people/7.png" className={classes.people} alt="" />
    </div>
  )
}

export default Map
