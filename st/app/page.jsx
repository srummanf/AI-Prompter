import React from 'react'
import Feed from '@components/Feed'

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover and Share
                <br className="max-md:hidden"></br>
                <span className="orange_gradient text-centre">AI poe</span>
            </h1>
            <p className="mt-4">Lorem ipsum dolor sit amet</p>
            <Feed></Feed>
        </section>


    )
}

export default Home
