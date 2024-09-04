import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header className='header'>
            <Link to="/" className='header__logo'>NYBlog</Link>
            <div>
                <Link to="/posts/new">New Post</Link>
                <Link to="/posts">Post List</Link>
                <Link to="/profile">Proflie</Link>
            </div>
        </header>
    )
}