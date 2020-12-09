import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const NewsList = ({ news, status }) => {

    const generateArticles = (newsArr) => {
        const newsItems = newsArr.map((n, i) => {
            return (
                <li key={i} className="list-group-item">
                    <a href={n.url}>{n.title}</a>
                </li>
            )
        });

        return (
            <ul className="list-group">
                {newsItems}
            </ul>
        )
    }

    return (
        <div>
            <h3>News</h3>
            {status ? <LoadingSpinner /> : generateArticles(news)}
        </div>
    )
}

export default NewsList;