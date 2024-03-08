import React, { useEffect, useState } from 'react'
import './Style.css'

const API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0'
const ITEMS_PER_PAGE = 6;

const JOB_DATA =
{
    "by": "jamilbk",
    "id": 35908337,
    "score": 1,
    "time": 1683838872,
    "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
    "type": "job",
    "url": "https://www.ycombinator.com/companies/firezone/jobs"
}

function JobData({ url, time, by, title }) {

    const formattedTime = new Date(time * 1000).toLocaleString();

    return <div className='post' role='listItem'>
        <h2 className='post__title'>
            <a href={url} className={url ? "" : "inactiveLink"} target='_blank' rel='noopener'>{title}</a>
        </h2>
        <span className='post__metadata'>
            By {by} : {formattedTime}
        </span>
    </div>
}

const JobBoard = () => {

    const [items, setItems] = useState([]);
    const [itemIds, setItemIds] = useState(null);
    const [fetchDetails, setFetchDetails] = useState(false);
    const [currentPage, setCurrentPage] = useState(0)

    const fetchItem = async (currentPage) => {
        setCurrentPage(currentPage);
        setFetchDetails(true);

        let itemsList = itemIds;
        if (itemsList === null) {
            const response = await fetch(`${API_ENDPOINT}/jobstories.json`);
            itemsList = await response.json();
            setItemIds(itemsList)
        }

        const itemsIdsForPage = itemsList.slice(
            currentPage * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        )

        const itemsForPage = await Promise.all(
            itemsIdsForPage.map(itemID =>
                fetch(`${API_ENDPOINT}/item/${itemID}.json`).then(res => res.json())
            )
        )

        setItems([...items, ...itemsForPage]);
        setFetchDetails(false);
    }

    useEffect(() => {
        if (currentPage === 0) {
            fetchItem(currentPage)
        }
    }, [])

    return (
        <div>
            <h1>Hacker News Job Board</h1>
            {
                itemIds === null || items.length < 1 ? (
                    <p className='loading'>Loading....</p>
                ) : (
                    <div>
                        <div className='items' role='list'>
                            {
                                items.map((item) => {
                                    return <JobData key={item.id} {...item} />
                                })
                            }
                        </div>
                        <button className='btn-load-more' onClick={() => fetchItem(currentPage + 1)}
                            disabled={fetchDetails}
                        > {fetchDetails ? "Loading" : "Load more jobs"}
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default JobBoard