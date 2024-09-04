import PostList from "../../components/PostList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PostPage (){
    return (
        <>
            <Header />
            <PostList hasNavigation={false}/>
            <Footer />
        </>
    )
}