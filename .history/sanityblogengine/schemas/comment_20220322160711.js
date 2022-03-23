export default {
  name: 'comment',
  type: 'document',
  title: 'comment',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'string',
    },
    {
        title: "Approved",
        name: "approved",
        type: "boolean",
        description: "Comments must be approved before showing"
    },
    {
      name: 'post',
      type: 'reference',
      to: [{type: "post"}]
    },
  ],
}
