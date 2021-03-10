export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6048f22e577fa40ea104b749',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5qk8ptfq',
                  apiId: 'abc7acb5-c5f7-404a-b7d0-e26c59fde526'
                },
                {
                  buildHookId: '6048f22e460ea8114878da61',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ncp5awts',
                  apiId: 'a24a1857-f808-46fa-ac44-4dbe9c94257b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jakub-kozak/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ncp5awts.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
