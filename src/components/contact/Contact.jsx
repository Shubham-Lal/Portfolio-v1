import "./contact.css";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { useRef, useState } from "react";
import { Oval } from 'react-loading-icons';
import { motion, useMotionValue } from "framer-motion"
import Checkmark from "./Checkmark";

const emailVerify = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(0);
    const [nameVal, setNameVal] = useState("");
    const [emailVal, setEmailVal] = useState("");
    const [projectVal, setProjectVal] = useState("");
    const progress = useMotionValue(90);

    const sendEmail = (e) => {
        e.preventDefault();
        if (!nameVal) return toast.error("Please enter your name!");
        if (!emailVal) return toast.error("Please enter your email!");
        if (!emailVerify.test(emailVal)) return toast.error("Invalid Email!");
        if (!projectVal) return toast.error("Please describe youself!!");

        setLoading(1);
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                setLoading(2);
            }, (error) => {
                return toast.error("Please try again after sometime...");
            });
    };

    return (
        <section className="contact section" id="contact">
            <div className="section__header">
                <h2 className="section__title">Contact</h2>
                <span className="section__subtitle">Get in Touch with me</span>
            </div>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk with me</h3>

                    <div className="contact__info">
                        {/* CARD 1 */}
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">im.shubhamlal@gmail.com</span>

                            <a href="mailto:im.shubhamlal@gmail.com" className="contact__button">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        {/* CARD 2 */}
                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+91 91631 61834</span>

                            <a
                                href={`https://api.whatsapp.com/send?phone=${import.meta.env.VITE_PHONE_NO}&text=Namaste Shubham`}
                                className="contact__button"
                                target="_blank" rel="noopener noreferrer"
                            >
                                Chat
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                        {/* CARD 3 */}
                        <div className="contact__card">
                            <i className="bx bxl-github contact__card-icon"></i>

                            <h3 className="contact__card-title">Github</h3>
                            <span className="contact__card-data">Shubham-Lal</span>

                            <a href="https://github.com/Shubham-Lal/DISCUSSIONS/issues/1" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Discuss
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Anything in mind...</h3>

                    <form className="contact__form" ref={form}>
                        {/* INPUT 1 */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Say your Name"
                                onChange={(e) => setNameVal(e.target.value)}
                            />
                        </div>
                        {/* INPUT 2 */}
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Enter your Email"
                                onChange={(e) => setEmailVal(e.target.value)}
                            />
                        </div>
                        {/* INPUT 3 */}
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Brief</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                className="contact__form-input scrollbar"
                                placeholder="What do you want to talk about?"
                                onChange={(e) => setProjectVal(e.target.value)}
                            />
                        </div>
                        <button href="#contact" className="button button__mail" disabled={loading === 2 ? true : false} onClick={(e) => sendEmail(e)}>
                            {loading === 0 ?
                                <>
                                    <span>Send</span>
                                    <img src='/others/send.svg' height={24} width={24} className="button__icon" alt="" />
                                </>
                                : loading === 1 ?
                                    <Oval stroke="#fff" height={30} width={30} />
                                    : loading === 2 && (
                                        <>
                                            <motion.div
                                                initial={{ x: 0 }}
                                                animate={{ x: 100 }}
                                                style={{ x: progress }}
                                                transition={{ duration: 1 }}
                                            />
                                            <Checkmark
                                                progress={progress}
                                                size={30}
                                                stroke={10}
                                            />
                                        </>
                                    )
                            }
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}