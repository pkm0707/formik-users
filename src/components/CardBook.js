import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





function CardBook({book,deleteButton,editButton}) {
  return (
    <Card variant="outlined" sx={{backgroundColor:"olivedrab"}}>
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }}  gutterBottom>
                Title: {book.title}
                </Typography>
                <Typography variant="h5" component="div" >
                <i>Author : </i><i>{book.author}</i>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ISBN: {book.ISBN}
                </Typography>
                <Typography variant="body2">
                Publication Date: {book.publication_date}
                </Typography>
            </CardContent>
            <CardActions>
                {editButton}
                {deleteButton}           
            </CardActions>
        </React.Fragment>
    </Card>
  )
}
export default CardBook