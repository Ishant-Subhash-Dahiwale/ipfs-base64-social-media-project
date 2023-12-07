// Import necessary dependencies
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

// Sample data
const postData = {
  name: 'John Doe',
  date: 'December 6, 2023',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget...',
  imageUrl: 'https://placekitten.com/600/400', // Replace with your image URL
};

// Component definition
const postcard = () => {
  return (
    <Card style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }} >
      <CardHeader
        avatar={<Avatar aria-label="user">{postData.name[0]}</Avatar>}
        title={postData.name}
        subheader={postData.date}
      />
      <CardMedia
        component="img"
        height="140"
        image={postData.imageUrl}
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postData.text}
        </Typography>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default postcard;

// import React  from 'react'
// import {Card} from '@mui/material';
// import "./postcard.css"
// // let sel=true;


// export default function postcard() {
  
//   return (<div>

//       <div>
//       <Card id='cardroot'>
//         <div >
//           <Card id='cardin1'> 
//           <div>
//             profile pic
//           </div>
        
//           <div>
//             name
//           </div>
        
//           <div>
//             img
//           </div>
//           <div>
            
//             <Card>
//               like,share,follow
//             </Card>
//           </div>
//           <div>
//             text
//           </div>
//           <div>
//             date
//           </div>       
//           </Card>
//         </div>
//       </Card>
//       </div>
//   </div>  )
// }
