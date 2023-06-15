import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {
    blog01,
    blog02,
    blog03,
    blog04,
    blog05,
} from "../../containers/blog/img-import";

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id="blog">
            <div className="gpt3__blog-heading gradient__text">
                <h1>A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container-groub_A">
                    <Article
                        imgBlog={blog01}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                </div>
                <div className="gpt3__blog-container-groub_B">
                    <Article
                        imgBlog={blog02}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgBlog={blog03}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgBlog={blog04}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                    <Article
                        imgBlog={blog05}
                        date="Sep 26, 2021"
                        title="GPT-3 and Open AI is the future. Let us explore how it is?"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
