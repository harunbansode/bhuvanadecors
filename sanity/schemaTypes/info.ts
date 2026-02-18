// schemas/infoSection.js
export default {
  name: 'infoSection',
  title: 'Info Section',
  type: 'document',
  fields: [
    { name: 'heading1', title: 'Heading 1', type: 'string' },
    { name: 'heading2', title: 'Heading 2', type: 'string' },
    { name: 'subheading', title: 'Subheading', type: 'text' },
    { name: 'description', title: 'Description', type: 'text' },
  ],
}