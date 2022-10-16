import Heading from "./../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import constant from "../../constant.json";
import styles from "./styles.module.css";

function Work() {
	return (
		<section id="work">
			<Heading index="03" heading="Some Things I’ve Built" />
			<div className={styles.container}>
				{constant.projects.map((project, index) =>
					index % 2 === 0 ? (
						<div className={styles.project}>
							<div className={styles.left}>
								
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								
							</div>
							<div className={styles.right}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href={project.github}
									target="_blank"
									rel="noreferrer" 
									className={styles.link}>
										<GitHubIcon />
									</a>
									<a href={project.link}
									target="_blank"
									rel="noreferrer"  className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>{project.desc}</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href={project.github}
									target="_blank"
									rel="noreferrer" 
									className={styles.link}>
										<GitHubIcon />
									</a>
									<a href={project.link}
									target="_blank"
									rel="noreferrer"  className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
							<div className={styles.right}>
								
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								
							</div>
						</div>
					)
				)}
			</div>
			
			<a href="https://github.com/nitinsayshe?tab=repositories">
				<button className={styles.btn}>I have some more projects also </button>
			</a>
			
		</section>
	);
}

export default Work;
