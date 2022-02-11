import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles } from "@mui/styles"

import Button from "@mui/material/Button"

const useStyles = makeStyles(_ =>
  createStyles({
    root: {}
  })
)
const Test = ({ className }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)}>
      <Button variant="contained" color="secondary">
        My project
      </Button>
    </div>
  )
}
export default Test
