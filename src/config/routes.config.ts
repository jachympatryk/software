import { AboutUsPage, LandingPage } from "pages";
import { RouteConfig } from "types";
import { ABOUT_PAGE, LANDING_PAGE, OFFER_PAGE } from "constants/routes.constants";
import { OffersPage } from "../pages/offers/offers.page";

export const routes: RouteConfig[] = [
  { ...LANDING_PAGE, component: LandingPage },
  { ...ABOUT_PAGE, component: AboutUsPage },
  { ...OFFER_PAGE, component: OffersPage },
];
