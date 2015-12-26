Package.describe({
  name: "kylenoble:node-summary",
  summary: "Summarizes text using a naive summarization algorithm, based off of the Python implementation by shlomibabluki. Based on Node-Summary by jbrooksuk.",
  version: "0.1.0",
  git: "https://github.com/kylenoble/meteor-node-summary"
});

Package.onUse(function(api) {
  // Meteor releases below this version are not supported
  api.versionsFrom("1.2.0.1");

  // Core packages and 3rd party packages

  // The files of this package
  api.addFiles("server/index.js", ["server"]);

  // The variables that become global for users of your package
  api.export("SummaryTool", ["server"]);
});

Npm.depends({
  "node-summary": "1.1.0"
});

Package.onTest(function (api) {
  api.use("tinytest");
  api.use("kylenoble:node-summary");
  api.addFiles("tests/server/index.js", ["server"]);
});

/* Generated by okgrow:package-kitchen */
