import { AboutUsPage, LandingPage } from "pages";
import { RouteConfig } from "types";
import { ABOUT_PAGE, LANDING_PAGE } from "constants/routes.constants";

export const routes: RouteConfig[] = [
  { ...LANDING_PAGE, component: LandingPage },
  { ...ABOUT_PAGE, component: AboutUsPage },
];
