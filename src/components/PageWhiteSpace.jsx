import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(6, 0, 4, 0),
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(6, 0)
      }
    }
  })
)
const PageContent = ({ className, children }) => {
  const classes = useStyles()
  return <div className={clsx(classes.root, className)}>{children}</div>
}
export default PageContent
