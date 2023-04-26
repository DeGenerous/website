import { defineConfig } from "tinacms";

console.log(process.env)

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "testing";

export default defineConfig({
  branch,
  clientId: "ca54b618-fbcd-48d0-90f7-a37c85b2152b",
  token: "0a004fc291938f991d055b00f81d8727a6d717ff",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "blog",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/blog",
        ui: {
          filename: {
            readonly: true,
            slugify: values => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-')}`
            },
          },
        },
        defaultItem: () => {
          return {
            publish_date: new Date()
          }
        },
        fields: [
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "publish_date",
            label: "Publish date",
            required: true,
            ui: {
              timeFormat: "HH:mm",
            },
          },
          {
            type: "image",
            name: "banner",
            label: "Banner image",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
