 const Hero = {
  slug: "hero",
  labels: {
    singular: "hero block",
    plural: "hero blocks",
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
  ],
};
export default Hero;
