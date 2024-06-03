import { CollectionConfig } from 'payload/types'

const Themes: CollectionConfig = {
  slug: 'themes',
  admin: {
    useAsTitle: 'theme',
  },
  fields: [
    {
      name: "IsShowContainers",
      type: "checkbox",
      label: "Show this topic in the app",
      defaultValue: true,
    },
    {
      name: "Background",
      type: "upload",
      relationTo: "media",
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "slider", // required
      type: "array", // required
      label: "Quotes",
      minRows: 0,
      maxRows: 20,
      labels: {
        singular: "Quote",
        plural: "Quotes",
      },
      fields: [
        {
          name: "Quote",
          type: "textarea",
        },
        //radio buttons
        {
          name: "Type", // required
          type: "radio", // required
          options: [
            // required
            {
              label: "Show",
              value: "default",
            },
            {
              label: "Hide",
              value: "language",
            },
          ],
          defaultValue: "default", // The first value in options.
          admin: {
            layout: "horizontal",
          },
        },
      ],
    },
  ],
}

export default Themes
