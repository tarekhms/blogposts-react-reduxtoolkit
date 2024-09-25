import { useState, useEffect } from 'react';
import useFetch from '../useFetch';

const HomePage = () => {
    // Change page title
    useEffect(() => {
        document.title = "new title"
    }, []);

    const { data: blog, isPending, error } = useFetch('https://api.chucknorris.io/jokes/random');

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && <BlogList blog={blog.value} title="All Blogs!" />}
        </div>
    );
}

const BlogList = ({ blog }) => {
    return (
        <div className="blog-list">
            <div className="blog-preview" key={blog.id} >
                <h2>{blog}</h2>
            </div>
        </div>
    );
}

export default HomePage