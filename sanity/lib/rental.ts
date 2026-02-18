export default {
  name: 'rental',
  title: 'Rental Item',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'category', title: 'Category', type: 'string', 
      options: { list: ['Lamp', 'Chair', 'Table', 'Catering'] } 
    },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text' },
  ],
}