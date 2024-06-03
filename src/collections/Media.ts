import { publicCollection } from "../utils/publicCollection";

const Media = {
  slug: "media",
  access: {
    read: publicCollection,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};

export default Media;
