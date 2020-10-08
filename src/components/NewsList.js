import React from 'react';

const NewsList = ({ news }) => {

    const generateArticles = (newsArr) => {
        return newsArr.map((n, i) => {
            return (
                <div key={i}>
                    <a href={n.url}>{n.title}</a>
                </div>
            )
        })
    }

    return (
        <div>
            {generateArticles(news)}
        </div>
    )
}

export default NewsList;