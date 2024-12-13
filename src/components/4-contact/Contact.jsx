
import "./Contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contactAnimation from "../../animation/contact.json";
const Contact = () => {
    const [state, handleSubmit] = useForm("mvgonblo");
    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope"></span>
                Contact us
            </h1>
            <p className="sub-title">Contact us for more information and Get notified when I publish something new.</p>

            <div style={{justifyContent: "space-between"}} className="flex">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <label className="email" htmlFor="email">Email Addres:</label>
                        <input autoCapitalize="off" required placeholder="Email Addres" type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label className="message" htmlFor="message">Your message:</label>
                        <textarea required name="message" id="message" placeholder="Message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button type="submit" disabled={state.submitting} className="submit">
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>

                    {state.succeeded && (<p className="flex" style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                        <Lottie style={{height: 37}} animationData={doneAnimation} />
                        Your message has been sent successfully</p>)}
                </form>
                <div className="animation">
                <Lottie style={{height: 355}} animationData={contactAnimation} />
                </div>
            </div>
        </section>
    )
}

export default Contact
