import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					<strong className="strong">Hello</strong>, I am Nitin Sayshe & I
					always fascinated about how tech can solve our day-to-day problems 
					with unique and interactive solutions. I Started my carrier from a startup enthusiast to sales manager 
					at a fitness organization, but one thing is very common to all is that 
					how the solution to modern problems can be solved using technology.
					</p>
					<p className={styles.desc}>
						I am always ready to learn new thing and creating thing that live on internet, I am a passionate developer and team player person,
					Fast Forwarding to today, currently I am working as a Backend developer at Function Up where I get trained on Node.js, Express ,MongoDb,
					and multiple backend technologies.
					</p>
					<p className={styles.desc}>
						As I begin the next chapter of my carrer , I am very eager to Learn, Grow any Contribute to my new role.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;
