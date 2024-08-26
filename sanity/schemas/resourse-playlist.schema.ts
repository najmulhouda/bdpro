const schema = {
  name: "resourcePlaylist",
  title: "ResourcePlaylist",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "resources",
      title: "Resources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "resource" }] }],
    },
  ],
};

export default schema;
