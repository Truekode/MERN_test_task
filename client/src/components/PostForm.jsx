import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

class PostContent {
    constructor(id = '', title = '', body = '') {
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

const PostForm = ({create, posts}) => {
    const [post, setPost] = useState(new PostContent());

    // const bodyInputRef  = useRef();

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {...post, id: posts.length}
        create(newPost);
        setPost(new PostContent())
    }

    return (
        <form>
            {/* Управляемый компонент элемент */}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder='Название поста'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder='Текст поста'
            />
            {/* Неконтролируемый элемент */}
            {/*<MyInput*/}
            {/*    ref={bodyInputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder='Описание поста'*/}
            {/*/>*/}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;