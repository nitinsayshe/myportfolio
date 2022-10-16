import Heading from "./../../Components/Heading";
import JavascriptIcon from "@mui/icons-material/Javascript";
import constant from "../../constant.json";
import styles from "./styles.module.css";

function skills() {
  return (
    <section id="work">
      <Heading index="04" heading="Skills I Have" />
      <div className="container">
        <img src="https://img.icons8.com/color/120/000000/nodejs.png" />
        <img src="https://img.icons8.com/color/100/000000/express-js.png"/>
        <img src="https://img.icons8.com/fluency/100/000000/javascript.png"/>
        <img src="https://img.icons8.com/color/90/000000/python--v1.png"/>
        <img src="https://img.icons8.com/office/80/000000/react.png"/>
        <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/90/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
      </div>
    </section>
  );
}

export default skills;
