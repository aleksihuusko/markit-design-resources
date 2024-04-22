import * as contentful from "contentful";

export type ResourceSkeleton = {
  contentTypeId: "resource";
  fields: {
    title: contentful.EntryFieldTypes.Text;
    url: contentful.EntryFieldTypes.Text;
    description: contentful.EntryFieldTypes.Text;
    category: contentful.EntryFieldTypes.Text;
    logo: contentful.EntryFieldTypes.AssetLink;
  };
};
