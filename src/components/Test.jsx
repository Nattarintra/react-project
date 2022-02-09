import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles } from "@mui/styles"

const useStyles = makeStyles(_ =>
  createStyles({
    root: {}
  })
)
const Test = ({ className }) => {
  const classes = useStyles()
  return <div className={clsx(classes.root, className)}>My project</div>
}
export default Test
