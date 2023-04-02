import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "ca54b618-fbcd-48d0-90f7-a37c85b2152b",
  token: "cddee2c1be601db9c50d2111747f8f749908d954",
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
