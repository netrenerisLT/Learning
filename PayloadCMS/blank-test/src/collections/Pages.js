import Hero from "@/blocks/hero";
import TwoColumn from "@/blocks/TwoColumn";

export const Pages = {
  slug: "pages",
  labels: {
    singular: "page",
    plural: "pages",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "slug", label: "Slug", type: "text", required: true },
    {
      name: "layout",
      label: "layout",
      type: "blocks",
      blocks: [],
    },
  ],
};
