import { loadable } from "frontity";
// Codesplit the timelines component
export default loadable(() => import("../timeline/cpt-subtimeline"));
