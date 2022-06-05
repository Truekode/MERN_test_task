import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function RecipesCard({itemId, title, description, img, time}) {
    const router = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 , borderRadius: '25px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', backgroundColor: '#FBF2E9'}}>
            <CardActionArea onClick={() => router(`/recipes/${itemId}`)}>
                <CardMedia
                    component="img"
                    // height="260"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="text.secondary">
                        {time}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}