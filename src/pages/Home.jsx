import React from 'react'
import Banner from '../components/Header/Banner'
import MenuBar from '../components/Header/MenuBar'
import Introduction from '../components/Header/Introduction'
import Campaign from '../components/Header/Campaign'
import InsideBanner from '../components/Header/InsideBanner'

export default function Home() {
    return (
        <>
            <Banner />
            <MenuBar />
            <Introduction />
            <Campaign />
            <InsideBanner />
        </>
    )
}
