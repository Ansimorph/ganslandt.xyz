import "./layouts/app.css";
import "./pages/index.css";

import "./components/landing-headline/landing-headline.css";

import LandingHeadlineLogic from "./components/landing-headline/landing-headline";
const landingHeadline = new LandingHeadlineLogic();
landingHeadline.run();
