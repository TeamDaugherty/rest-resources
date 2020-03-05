/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = []

const repoUrl = 'https://github.com/TeamDaugherty/rest-resources'

const siteConfig = {
  title: 'Rest Resources', // Title for your website.
  tagline: 'A framework-agnostic pattern for integrating with RESTful APIs without boilerplate.',
  url: 'https://TeamDaugherty.github.io', // Your website URL
  baseUrl: '/rest-resources/', // Base URL for your project */

  // Used for publishing and more
  projectName: 'rest-resources',
  organizationName: 'TeamDaugherty',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'install', label: 'Docs'},
    {doc: 'examples/examples-basic', label: 'Examples'},
    {href: repoUrl, label: "GitHub"},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/team-daugherty.png',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#558c40', // Dark Green
    secondaryColor: '#b5cf83', // light Green
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Daugherty Business Solutions`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'darcula',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/rest-resources/js/code-block-buttons.js',
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  scrollToTop: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl,
}

module.exports = siteConfig
