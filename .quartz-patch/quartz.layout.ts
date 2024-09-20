import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
  /*  Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'pvojtechovsky/counseling',
        // from data-repo-id
        repoId: 'R_kgDOMULDgg',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOMULDgs4CiYv6',
        inputPosition: "top",
      }
    }),*/
  ],
  footer: Component.Footer({
    links: {
      "Facebook": "https://www.facebook.com/pavel.vojtechovsky.92/",
      "Email": "mailto:empatie.pavel@seznam.cz,
      "Psychofonetika": "https://skolaempatie.sk/o-nas/o-psychofonetike/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({rootName: "Domů"}),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({folderClickBehavior: "link"})),
  ],
  right: [
    // Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    // Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
