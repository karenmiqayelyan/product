import Footer from "./footer/Footer"
import Section from "./section/Section"
import Section2 from "./section2/Section2"
import css from './section/page.module.css'
import Sliderfil from "./slider/Sliderfil"
function Page() {
    return (
        <div className={css.content}>
            <Sliderfil/>
            <Section/>
            <Section2 />
            <Footer/>
        </div>
    )
}
export default Page