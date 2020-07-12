import React from 'react';
import {useSelector} from 'react-redux';
import Helmet from 'react-helmet';
import {NavLink} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {normalizeDate} from '../normalizeDate';


const PostList = () => {
  const posts = useSelector(state => Object.values(state.posts).reverse());
  return (
    <div className="wrapper">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <div className="post__list">
        {posts.length ?
          posts.map(post => {
            const date = normalizeDate(post.date);
            return (
              <Card className="card" key={post.id}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {`${date.day} ${date.month} ${date.hours}:${date.minutes}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Автор: {post.author}
                  </Typography>
                </CardContent>
                <CardActions>
                  <NavLink to={`/post/${post.id}`}>
                    <Button size="small" color="primary">Подробнее</Button>
                  </NavLink>
                </CardActions>
              </Card>
            )
          })
          :
          <Card className="card" variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h4">
                Список записей пуст!
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink to="/post-add">
                <Button size="small" color="primary">
                    Добавить запись
                </Button>
              </NavLink>
            </CardActions>
          </Card>
        }
        {}
      </div>
    </div>
  )
};

export default PostList;
