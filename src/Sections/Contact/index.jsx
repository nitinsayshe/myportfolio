import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Contact() {
	return (
		<section className={styles.contact_section} id="contact">
			<div className={styles.heading_1}>
				<Heading index="05" heading="We can Connect" />
			</div>
			<h1 className={styles.heading_2}>Get In Touch</h1>
			<p className={styles.greet}>nitinsayshe@gmail.com</p>
			<p className={styles.desc}>
				Feel free to get in touch with me. I am always open to discussing new
				projects, creative ideas or opportunities to be part of your visions.
			</p>
			<a href="mailto:nitinsayshe@gmail.com">
				<button className={styles.btn}>Say Hello</button>
			</a>
		</section>
	);
}

export default Contact;
