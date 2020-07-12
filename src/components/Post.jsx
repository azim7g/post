import React from 'react';
import {useSelector} from 'react-redux';
import Helmet from 'react-helmet';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {normalizeDate} from '../normalizeDate';

const Post = (props) => {
  const post = useSelector(state => state.posts[props.match.params.id]);
  const date = normalizeDate(post.date);
  return (
    <div className="post__wrapper">
      <Helmet>
        <title>{post.title}</title>
      </Helmet>
      <div className="post">
        <div>
          <h1>{post.title}</h1>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                  {post.author[0]}
                </Avatar>
              }
              title={`Автор: ${post.author}`}
              subheader={`${date.day} ${date.month} ${date.year}г. ${date.hours}:${date.minutes}`}
            />
            <CardContent style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color: '#fff'}}>
              <Typography className="post__content" paragraph>
                {post.content}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default Post;