// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import feature from "./documents/feature"; // import the file you just made
import department from "./documents/department";
import profile from "./documents/profile";
import resourceEquipment from "./documents/resourceEquipment";
import studentCollabrator from "./documents/studentCollabrator";
import studentRole from "./documents/studentRole";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    feature, // add the document type to this array
    department,
    profile,
    resourceEquipment,
    studentCollabrator,
    studentRole,
  ]),
});
