import React from 'react';

const NewsList = ({ news }) => {

    const generateArticles = (newsArr) => {
        return newsArr.map((n, i) => {
            return (
                <li key={i} className="list-group-item">
                    <a href={n.url}>{n.title}</a>
                </li>
            )
        })
    }

    return (
        <div>
            <h3>News</h3>
            <ul className="list-group">
                {generateArticles(news)}
            </ul>
        </div>
    )
}

export default NewsList;