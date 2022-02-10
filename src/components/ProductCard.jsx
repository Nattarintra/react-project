import React from "react"
import clsx from "clsx"
import { createStyles, makeStyles } from "@mui/styles"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"

const useStyles = makeStyles(_ =>
  createStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  })
)
const ProductCard = ({ className, id, title = "This is product title", imageURL = `/images/default.png`, price = 123, onClick }) => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root, className)}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} component="img" height="140" image={imageURL} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary" size="small">
            add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
export default ProductCard
