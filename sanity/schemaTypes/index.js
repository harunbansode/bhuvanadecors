// sanity/schemaTypes.js
import hero from './hero';
import service from "./service";
import gallery from "./gallery";
import rental from "../lib/rental";
import infoSection from "./info"
import contact from "./contact"

export const schema = {
  // Combine ALL schemas into this one array
  types: [
    hero, 
    service, 
    gallery, 
    rental,
    infoSection,
    contact
  ],
};