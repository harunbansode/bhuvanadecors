// schemas/contact.js
export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    { name: 'bannerImage', title: 'Banner Image', type: 'image', options: { hotspot: true } },
    { name: 'address', title: 'Address', type: 'text' },
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'openingHours', title: 'Opening Hours', type: 'string' },
  ]
}