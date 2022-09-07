export default function Contact() {
    return (
        <>
            <h2>Contact me</h2>

            <section class="d-flex flex-row flex-wrap justify-content-center">
                <p className="text-center">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>
                <div class="row">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <div class="row">

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="name" class="">Name:</label>
                                    <input type="text" id="name" name="name" class="form-control"></input>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="md-form mb-0">
                                    <label for="email" class="">Email:</label>
                                    <input type="text" id="email" name="email" class="form-control"></input>
                                </div>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <label for="subject" class="">Subject:</label>
                                    <input type="text" id="subject" name="subject" class="form-control"></input>
                                </div>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-12">

                                <div class="md-form">
                                    <label for="message">Message:</label>
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="text-center text-md-left m-2">
                        <a class="btn btn-info" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                </div>
            </section>

            <h2>Socials</h2>
            <div className="d-flex flex-row justify-content-center flex-wrap">
                <a href="https://www.instagram.com/_bobros/" target="_blank" rel="noreferrer"> <i class="bi bi-instagram"></i></a>
                <a href="https://twitter.com/borithium2" target="_blank" rel="noreferrer"><i class="bi bi-twitter"></i></a>
                <a href="https://cz.linkedin.com/" target="_blank" rel="noreferrer"><i class="bi bi-linkedin"></i></a>
                <a href="https://github.com/Boriwan" target="_blank" rel="noreferrer"><i class="bi bi-github"></i></a>
            </div>
        </>
    )
}
