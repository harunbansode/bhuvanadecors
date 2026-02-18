// src/sanity/schemaTypes/infoSection.ts
import { defineField, defineType } from "sanity";

export const infoSection = defineType({
  name: "infoSection",
  title: "Info Section",
  type: "document",
  fields: [
    defineField({
      name: "heading1",
      title: "Heading 1",
      type: "string",
    }),
    defineField({
      name: "heading2",
      title: "Heading 2",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});