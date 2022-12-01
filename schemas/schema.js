// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import feature from "./documents/feature"; // import the file you just made
import profile from "./documents/profile";
import card from "./documents/card";
import research from "./documents/research";
import profileType from "./documents/profileType";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    feature, // add the document type to this array
    card,
    profile,
    profileType,
    research,
  ]),
});
