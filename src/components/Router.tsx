import {Route, Routes, Navigate} from 'react-router-dom';
import Home from '../pages/home';
import PostPage from '../pages/posts';
import PostDetailPage from '../pages/posts/detail';
import PostNew from '../pages/posts/new';
import PostEdit from '../pages/posts/edit';
import ProfilePage from '../pages/profile';
import Login from '../pages/login';
import SignUp from '../pages/signup';

export default function Router (){
    return(
        <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostPage/>} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
    )
}

