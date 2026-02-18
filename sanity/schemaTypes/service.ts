import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    // New field to control homepage display
    defineField({
      name: "showOnHome",
      title: "Show on Homepage",
      type: "boolean",
      initialValue: false,
      description: "Toggle this ON to display this service in the specialized section of the homepage.",
    }),
  ],
});