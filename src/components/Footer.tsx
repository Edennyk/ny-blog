import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer>
        <Link to="/posts/new">New Post</Link>
        <Link to="/posts">Post List</Link>
        <Link to="/profile">Proflie</Link>
    </footer>
    )
}