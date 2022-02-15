import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles } from "@mui/styles"

import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import Button from "@mui/material/Button"

const useStyles = makeStyles(_ =>
  createStyles({
    root: {}
  })
)
const BackdropLoading = ({ className }) => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <div className={clsx(classes.root, className)}>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
export default BackdropLoading
