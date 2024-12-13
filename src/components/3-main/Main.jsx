
import { useState } from "react";
import "./Main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from 'motion/react';


const Main = () => {

    const [currentActive, setCurrentActive] = useState("all");
    const [arr, setArr] = useState(myProjects);

    const handleClick = (buttonCategory) => {
        setCurrentActive(buttonCategory);
        const newArr = myProjects.filter((item) => {
            const newlist = item.category.filter((myItem) => {
                return myItem === buttonCategory;
            });
            return newlist[0] === buttonCategory;
        })
        setArr(newArr)
    }
    return (
        <main className="flex">
            <section className="flex left-section">
                <button onClick={() => {
                    setCurrentActive("all");
                    setArr(myProjects)
                }} className={currentActive === "all" ? "active" : null}>All Projects</button>
                <button onClick={() => {
                    handleClick("css")
                }}
                    className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
                <button onClick={() => {
                    handleClick("js");
                }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
                <button onClick={() => {
                    handleClick("react")
                }} className={currentActive === "react" ? "active" : null}>React & MUI</button>
                <button onClick={() => {
                    handleClick("node")
                }} className={currentActive === "node" ? "active" : null}>Node & Express</button>
            </section>
            <section className="flex right-section">
                <AnimatePresence>

                    {arr.map((item) => {
                        return (

                            <motion.article
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{type: "spring", damping: 8, stiffness: 500}}
                                key={item.imgPath} className="card">
                                <img width={266} src={item.imgPath} alt="" />
                                <div style={{ width: "266px" }} className="box">
                                    <h1 className="title">{item.projectTitle}</h1>
                                    <p className="sub-title">Lorem ipsum dolor sit amet consectetur elit adipiscing.Ex tempore dolor in, accusantium laudantium accusamus.</p>
                                    <div className="flex icons">
                                        <div style={{ gap: "11px" }} className="flex">
                                            <div className="icon-link"></div>
                                            <div className="icon-github"></div>
                                        </div>
                                        <a className="link flex" href="">
                                            more
                                            <span className="icon-arrow-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        )
                    })}
                </AnimatePresence>
            </section>
        </main>
    )
}

export default Main
