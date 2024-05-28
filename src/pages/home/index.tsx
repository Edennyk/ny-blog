import {Link} from 'react-router-dom';

export default function Home (){
    return (
        <div>
            <header>
                <div>
                    <Link to="/posts/new">New Post</Link>
                    <Link to="/posts">Post List</Link>
                    <Link to="/profile">Proflie</Link>
                </div>
            </header>
            <div className="post-list">post list</div>
            <footer>
                <div>menu1</div>
                <div>menu1</div>
                <div>menu1</div>
            </footer>
        </div>
    )
}