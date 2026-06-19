// import { defineType, defineField } from "sanity";

// export default defineType({
//   name: "gallery",
//   title: "Gallery Category",
//   type: "document",
//   fields: [
//     defineField({
//       name: "title",
//       title: "Category Name",
//       type: "string",
//       validation: Rule => Rule.required(),
//     }),
//     defineField({
//       name: "description",
//       title: "Category Description",
//       type: "text",
//       rows: 4,
//     }),
//     defineField({
//       name: "images",
//       title: "Images",
//       type: "array",
//       of: [
//         {
//           type: "image",
//           options: { hotspot: true },
//           fields: [
//             {
//               name: "details",
//               title: "Image Description",
//               type: "string",
//             },
//           ],
//         },
//       ],
//     }),
//     defineField({
//       name: "order",
//       title: "Display Order",
//       type: "number",
//     }),
//   ],
// });

import { defineType, defineField } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",

  fields: [
    defineField({
      name: "service",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "Birthday & Sweet 16", value: "birthday" },
          { title: "Baby Shower", value: "babyshower" },
          { title: "Mehndi", value: "mehndi" },
          { title: "Sangeet", value: "sangeet" },
          { title: "Haldi", value: "haldi" },
          { title: "Wedding Decor", value: "wedding" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "details",
              title: "Image Description",
              type: "string",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "order",
      title: "Order",
      type: "number",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "service",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "No Title",
        subtitle: subtitle || "No Category",
      };
    },
  },
});