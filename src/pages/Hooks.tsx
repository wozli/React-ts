import React, {FC, useRef, useState} from 'react';
import useInput from "../hooks/useInput";
import useHover from "../hooks/useHover";
import useDebounce from "../hooks/useDebounce";
import useRequest from "../hooks/useRequest";
import axios from "axios";

const Hooks: FC = () => {

    const username = useInput('');
    const password = useInput('');
    const ref = useRef<HTMLDivElement>(null);
    const isHovering = useHover(ref);

    const debounceTest = useDebounce(alert, 500);
    const [debounceInput, setDebounceInput] = useState<string>('');

    function onChangeDebounceInput(e:React.ChangeEvent<HTMLInputElement>) {
        setDebounceInput(e.target.value);
        debounceTest(`через 500мс показало: ${e.target.value}`)
    }

    const [posts, loading, error] = useRequest(fetchPosts);

    function fetchPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
    }

    return (
        <div>
            <h1>useInput</h1>
            <input type="text" {...username} placeholder='username'/>
            <input type="text" {...password} placeholder='password'/>
            <button onClick={() => console.log(username, password)}>btn</button>
            <hr/>
            <h1>useHover</h1>
            <div style={{width: 200, height: 200, backgroundColor: isHovering ? 'green' : 'red'}} ref={ref}>
            </div>
            <hr/>
            <h1>useDebounce</h1>
            <input type="text" value={debounceInput} onChange={onChangeDebounceInput}/>
            <hr/>
            <h1>useRequest</h1>

            {loading &&
                <h3>Идет загрузка</h3>
            }
            {posts && posts.map((post:any) => (
                <div style={{padding:5, border: '1px solid black'}} key={post.id}>{post.id} . {post.title}</div>
            ))}


        </div>
    );
};

export default Hooks;