import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCircle,
  faChevronUp,
  faTimes,
  faBars,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faComment } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faZhihu,
  faFacebookF,
  faFacebook,
  faMedium,
  faMediumM,
} from '@fortawesome/free-brands-svg-icons';

const installFontAwesome = () => {
  library.add(
    faCircle,
    faComment,
    faChevronUp,
    faEnvelope,
    faGithub,
    faZhihu,
    faFacebookF,
    faFacebook,
    faMedium,
    faMediumM,
    faTimes,
    faBars,
    faBlog,
  );
};

export default installFontAwesome;