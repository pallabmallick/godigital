import React from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_wg97o1p', 'template_01gdgnd', e.target, 'user_dx9hAW9rWSda2GKT2iIXZ')
            .then((result) => {
                console.log(result.text);
                // alert("save")
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });

    }
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact Us</h2>
                        <p>Contact us the get started</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div className="info">
                                <div className="address">
                                    <i className="fa fa-map-marker"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i className="fa fa-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i className="fa fa-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" style={{ border: "0", width: "100%", height: "290px" }} frameborder="0" allowfullscreen></iframe>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <form onSubmit={sendEmail} className="php-email-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name">Your Name</label>
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="form-group col-md-6 mt-3 mt-md-0">
                                        <label for="name">Your Email</label>
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label for="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                </div>
                                <div className="form-group mt-3">
                                    <label for="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
};
export default Mailer
