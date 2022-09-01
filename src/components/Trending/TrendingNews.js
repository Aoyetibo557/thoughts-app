import React, {useState, useEffect} from 'react';
import "./TrendingNews.css";
import TrendingNewsCard from './TrendingNewsCard';
import SkeletonCard from "../Skeleton/SkeletonCard";



function TrendingNews() {
    const [news, setNews] = useState([])
    const [searchFilter, setSearchFilter] = useState("general");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            getTrendingNews(searchFilter);
        }, 2000)
        return () => clearTimeout(timeout)

    },[searchFilter])

    const getTrendingNews = async(searchVal) => {
        const newsAPI = `https://saurav.tech/NewsAPI/top-headlines/category/${searchVal}/us.json`
        // empty out the newsarray before refiling with the new data
        setNews([]);
        await fetch(newsAPI).then(response => {
            if(response.ok) {
                return response.json();
            }
            throw response
        })
        .then(data => {
            // console.log(data)
            setNews(data.articles)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message
            return {errorCode, errorMsg};
        }).finally(() => {
            setLoading(false)
        })
    }


  return news.length !== 0 ? (
    <div className='trendingnews'>
        <div className='trendingnews__top'>
            <h4>News & Articles</h4>
            <div>
                <button className='trendingnews__button' onClick={() => setSearchFilter("general")}>general</button>
                <button className='trendingnews__button' onClick={() => setSearchFilter("sports")}>sports</button>
                <button className='trendingnews__button' onClick={() => setSearchFilter("business")}>business</button>
                <button className='trendingnews__button' onClick={() => setSearchFilter("health")}>health</button>
                <button className='trendingnews__button' onClick={() => setSearchFilter("science")}>science</button>
                <button className='trendingnews__button' onClick={() => setSearchFilter("technology")}>technology</button>
                <button className='trendingnews__button' onClick={() => setSearchFilter("entertainment")}>entertainment</button>
            </div>

        </div>

        {/* {news.length ===0 && (
            <SkeletonCard />
        )} */}

    
        <div>
            {news.map((data, idx) => (
                <TrendingNewsCard
                    key={idx}
                    author={data.author}
                    publishedAt={data.publishedAt}
                    source={data.source}
                    title={data.title}
                    url={data.url}
                    urlToimage={data.urlToImage}
                    description={data.description}
                    content={data.content}
                />
            ))}
        </div>
    </div>
  ) : (
            <SkeletonCard />

  )
}

export default TrendingNews