import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faBook,
  faEnvelope,
  faHome,
  faNewspaper,
  faRss,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const registerIcons = (): void =>
  library.add(
    fas,
    faHome,
    faEnvelope,
    faNewspaper,
    faUser,
    faRss,
    faBook,
    faGithub,
    faLinkedin
  );

export default registerIcons;
