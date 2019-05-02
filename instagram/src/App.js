import './App.css';

import PostManager from './Componets/Posts/PostManager';
import Login from './Componets/Authentication/Login';
import withAuthenticate from './Componets/Authentication/withAuthenticate'

export default withAuthenticate(PostManager)(Login);
