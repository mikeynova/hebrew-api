"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Lesson",
    embedded: false
  },
  {
    name: "Link",
    embedded: false
  },
  {
    name: "Page",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/mike-terranova-a80647/prisma/dev`
});
exports.prisma = new exports.Prisma();
