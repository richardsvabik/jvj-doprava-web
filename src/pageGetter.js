import { useStoryblokApi } from "@storyblok/astro";
// import { stories } from './lib/links'

const stories = {};

export const serverGetter = async () => {
  const storyblokApi = useStoryblokApi();
  let links = await storyblokApi.getAll("cdn/links", {
    version: import.meta.env.PROD ? "published" : "draft",
  });

  links = Object.keys(links).map((uuid) => links[uuid]);
  links = links.filter(
    (link) =>
      !link.is_folder &&
      link.slug !== "redirects" &&
      !link.slug.includes("templates/"),
  );
  return links.map((link) => {
    stories[link.uuid] = link;

    let path = link.slug;
    if (!path.length || path === "/" || path === "_home") {
      path = undefined;
    }
    if (typeof path === "string" && path.startsWith("/")) {
      path = path.substring(1);
    }
    return {
      slug: link.slug,
      path,
      real_path: link.real_path,
      stories,
    };
  });
};

export const staticGetter = async () => {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/links", {
    version: import.meta.env.PROD ? "published" : "draft",
  });
  let { links } = data;

  links = Object.keys(links).map((uuid) => links[uuid]);
  links = links.filter(
    (link) =>
      !link.is_folder &&
      link.slug !== "redirects" &&
      !link.slug.includes("templates/"),
  );
  return links.map((link) => {
    stories[link.uuid] = link;

    let path = link.slug;
    if (!path.length || path === "/" || path === "_home") {
      path = undefined;
    }
    if (typeof path === "string" && path.startsWith("/")) {
      path = path.substring(1);
    }
    return {
      params: { path },
      props: { slug: link.slug, stories },
    };
  });
};
