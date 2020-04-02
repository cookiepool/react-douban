import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = React.lazy(() => import('../views/Home'));
const Movies = React.lazy(() => import('../views/Movies'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/index',
    exact: true,
    render: () => {
      return <Redirect to={ "/" }></Redirect>
    }
  },
  {
    path: '/movies',
    exact: true,
    component: Movies
  }
]

export default routes;