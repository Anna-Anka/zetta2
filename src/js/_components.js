import { cooperationScroll } from "./components/scroll/_cooperation-scroll";
import { productNavigationScroll } from "./components/scroll/_product-navigation-scroll";
import { workScroll } from "./components/scroll/_work-scroll";
import { articlesFunction } from "./components/_articles";
import { interactiveBoxFunction, interactiveFunction } from "./components/_interactive";
import { modalsFunction } from "./components/_modals";
import { questionFunction } from "./components/_questions";
import { salonsFunction } from "./components/_salons";
import { sortFunction } from "./components/_sort";
import { handleMarquee } from "./components/_ticker";

interactiveFunction();
modalsFunction();
salonsFunction();
articlesFunction();
interactiveBoxFunction();
sortFunction();
questionFunction();
handleMarquee();

// * scroll
productNavigationScroll();
workScroll();
cooperationScroll();
