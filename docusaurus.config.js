module.exports = {
  title: 'Material Table',
  tagline: 'React data table component that based on Material-UI. This is a maintained fork of mbrn/material-table',
  url: 'https://material-table.com',
  baseUrl: '/',
  favicon: '/ico/favico.ico',
  organizationName: 'oze4', // Usually your GitHub org/user name.
  projectName: 'material-table-docs', // Usually your repo name.
  
  themeConfig: {
    // defaultDarkMode: true,
    // announcementBar: {
    //  id: 'announcement_bar', // Any value that will identify this message.
    //  content: 'Some really important announcement!',
    //  backgroundColor: ' #fff6ce', // '#e8eaf5', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
    prism: {
      theme: require('prism-react-renderer/themes/oceanicNext'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    navbar: {
      title: 'Material Table',
      logo: {
        alt: 'material_table_logo',
        src: 'img/material-table-logo.svg',
      },
      links: [
        {
          to: 'docs/getting-started/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          href: 'https://github.com/oze4/material-table-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/material-table',
            },
            {
              label: 'Chat on Gitter!',
              href: 'https://gitter.im/material-table/Lobby',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/baranmehmet',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mbrn/material-table',
            },
          ],
        },
      ],
      logo: {
        alt: 'material_table_logo',
        src: 'img/material-table-logo.svg',
      },
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/getting-started/installation',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/oze4/material-table-core-website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock']
};
