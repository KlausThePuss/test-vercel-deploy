import React from "react";
import "./article.css";

const Article = ({ imgBlog, date, title }) => {
    return (
        <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-img">
                <img src={imgBlog} alt="blog img" />
            </div>
            <div className="gpt3_blog-content">
                <div className="gpt3__blog-container-date">
                    <div className="gpt3__blog-container_article-date">
                        <h1> {date} </h1>
                    </div>
                    <div className="gpt3__blog-container_article-tittle">
                        <h5> {title} </h5>
                    </div>
                </div>
                <div className="gpt3__blog-container_article-fullArticle">
                    <h2>Read Full Article</h2>
                </div>
            </div>
        </div>
    );
};

export default Article;
