import React, { useEffect, useState } from 'react';
import './../../styles/NewsUpdate.css';
import NewsCard from './NewsCard';

const NewsUpdate = ({ city, iso }) => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=${iso.toLowerCase()}&apiKey=3228cad84a9a4d88bea5ceb3914b1923`
            let req = new Request(url)
            let response = await fetch(req)
            let data = await response.json()
            setNews(data.articles)
        }
        fetchNews()
    }, [])

    const renderNews = () => (
        news.map(info => (
            <NewsCard key={`${info.publishedAt} ` + Date.now()} info={info} />
        ))
    )

    return (
        <div className='news_update_wrapper'>
            <p>{`Recent ${city[0].toUpperCase()}${city.slice(1).toLowerCase()} News Update`}</p>
            <div className='news_update_listing'>
                {news && renderNews()}
            </div>
        </div>
    )
}

export default NewsUpdate