import './home.css'
import { HomeHeader } from "../../components/home/HomeHeader"
import { Hero } from "../../components/home/Hero"
import { Categories } from "../../components/home/Categories"
import { Footer } from "../../components/common/Footer"

export function Home() {

    return (
        <>
            <title>Home</title>

            <HomeHeader />
            <Hero />
            <Categories />
            <Footer />
        </>
    )
}