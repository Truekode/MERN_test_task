import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {useNavigate} from "react-router-dom";

export default function AttractionCard({itemId, title, description, img}) {
    const router = useNavigate();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => router(`/attraction/${itemId}`)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img[0]}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}