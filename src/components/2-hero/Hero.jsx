

import "./Hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { motion } from "motion/react"

const Hero = () => {

    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 7, type: "spring", stiffness: 100 }}
                        src="./photo-modified.png" className="avatar" alt="" />
                    <div className="icon-verified"></div>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="title">Software designer, founder, and amateur astronaut.</motion.h1>

                <p className="sub-title">I’m Kerolos Mina, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space own terms.</p>

                <div className="all-icons flex">
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin"></div>
                </div>
            </div>

            <div className="right-section animation">
                <Lottie animationData={devAnimation} />
            </div>
        </section>
    )
}

export default Hero;


// import "./Hero.css";
// import Lottie from "lottie-react";
// import devAnimation from "../../animation/dev.json";
// import { useRef, useEffect } from "react";

// const Hero = () => {
//     const lottieRef = useRef();

//     // استخدام useEffect لضبط سرعة الرسوم المتحركة بعد تحميلها
//     useEffect(() => {
//         if (lottieRef.current) {
//             lottieRef.current.setSpeed(0.5); // ضبط السرعة
//         }
//     }, []); // يتم تنفيذ هذا الكود مرة واحدة فقط بعد تحميل المكون

//     return (
//         <section className="hero flex">
//             <div className="left-section">
//                 <div className="parent-avatar flex">
//                     <img src="./photo-modified.png" className="avatar" alt="" />
//                     <div className="icon-verified"></div>
//                 </div>

//                 <h1 className="title">Software designer, founder, and amateur astronaut.</h1>

//                 <p className="sub-title">
//                     I’m Kerolos Mina, a software designer and entrepreneur based in New York City.
//                     I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
//                 </p>

//                 <div className="all-icons flex">
//                     <div className="icon icon-twitter"></div>
//                     <div className="icon icon-instagram"></div>
//                     <div className="icon icon-github"></div>
//                     <div className="icon icon-linkedin"></div>
//                 </div>
//             </div>

//             <div className="right-section animation">
//                 <Lottie
//                     lottieRef={lottieRef} // ربط Lottie بالـ ref
//                     animationData={devAnimation} // البيانات الخاصة بالرسوم المتحركة
//                 />
//             </div>
//         </section>
//     );
// };

// export default Hero;
