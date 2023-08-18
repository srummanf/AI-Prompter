"use client"

import { useState, useEffect } from 'react'
import PromptCard from '@components/PromptCard'


const PromptCardList = ({ data, handleTagClick }) => {
    return (<div className="prompt_layout mt-16"></div>)
}

const Feed = () => {

    const [searchText, setSearchText] = useState('');



    const handleSearchTextChange = (e) => {

    }

    return (
        <section className="Feed">
            <form className="relative w-full flex-center">
                <input type="text" placeholder="Sear4ch" value={searchText}
                    onChange={handleSearchTextChange}></input>
            </form>

            <PromptCardList data={[]} handleTagClick={()=>{}}></PromptCardList>
        </section>
    )
}

export default Feed
