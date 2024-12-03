 const TwoColumn = {
  slug: "twocolumn",
  labels: {
    singular: "two column block",
    plural: "two column blocks",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "heading", label: "heading", type: "text" },
    { name: "text", label: "text", type: "textarea" },
    {
      name: "backgroundImage",
      label: "Image",
      type: "upload",
      relationTo: "media",
    },
    {
      direction: "direction",
      label: "direction",
      type: "select",
      fields: [
        {
          label: "default",
          value: "default",
        },
        {
          label: "reverse",
          value: "reverse",
        },
      ],
    },
  ],
};

export default TwoColumn;

