export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d5ed3521c5e2fe22b802b7b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-o43tr56a',
                  apiId: '3256a9b9-9847-4bae-8631-aeb51e23840b'
                },
                {
                  buildHookId: '5d5ed35264c0b81fabde356c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8paqji6r',
                  apiId: 'b38ffd4d-720a-4e2c-8d17-f233c4a39607'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Miltondz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8paqji6r.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
