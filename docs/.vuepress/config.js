module.exports = {
  title: "Un-Official Docs",
  description: "Un-Official faker.js Documentation",
  dest: "dist",
  themeConfig: {
    displayAllHeaders: true,
    logo: "/logo.png",
    sidebar: [
      ["/", "Overview"],
      {
        title: "API Methods",
        collapsable: false,
        children: ["/api/address", "/api/helpers", "/api/api"]
      },
      "/localization"
    ],
    lastUpdated: "Last Updated",
    repo: "JeffBeltran/faker.js-docs",
    repoLabel: "Contribute!",
    editLinks: true,
    editLinkText: "Help improve this page!"
  }
};
