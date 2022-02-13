export default {
    name: 'propertyImage',
    title: 'Property Image',
    type: 'image',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            option: {
                isHighlighted: true,
            }
        },
    ],
    options: {
        hotspot: true,
    }
}