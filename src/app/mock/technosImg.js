export const TechImages = {
    web: [
      { src: '/technos/react.svg', alt: 'React' },
      { src: '/technos/php.svg', alt: 'Php' },
      { src: '/technos/angular.svg', alt: 'Angular' },
      { src: '/technos/vuedotjs.svg', alt: 'Vuejs' },
      { src: '/technos/nodedotjs.svg', alt: 'Node' },
      { src: '/technos/symfony.svg', alt: 'Symfony' },
      { src: '/technos/sass.svg', alt: 'Sass' },
      { src: '/technos/nextdotjs.svg', alt: 'NextJs' },
    ],
    devops: [
        { src: '/technos/docker.svg', alt: 'Docker' },
        { src: '/technos/github.svg', alt: 'GitHub' },
        { src: '/technos/gitlab.svg', alt: 'GitLab' },
        { src: '/technos/grafana.svg', alt: 'Grafana' },
        { src: '/technos/kubernetes.svg', alt: 'Kubernetes' },
        { src: '/technos/terraform.svg', alt: 'Terraform' },
    ],    
    outil: [
        { src: '/technos/bitbucket.svg', alt: 'BitBucket' },
        { src: '/technos/jira.svg', alt: 'Jira' },
        { src: '/technos/postman.svg', alt: 'Postman' },
        { src: '/technos/dbeaver.svg', alt: 'Dbaver' },
        { src: '/technos/insomnia.svg', alt: 'Inosomnia' },
        { src: '/technos/phpstorm.svg', alt: 'Phpstorm' },

    ],
    db: [
        { src: '/technos/postgresql.svg', alt: 'Postresql' },
        { src: '/technos/prisma.svg', alt: 'Prisma' },
        { src: '/technos/sequelize.svg', alt: 'Seuelize' },
        { src: '/technos/mongodb.svg', alt: 'Mongodb' },
        { src: '/technos/graphql.svg', alt: 'Graphql' },
        { src: '/technos/mysql.svg', alt: 'Mysql' },
    ],
    cloud: [
      { src: '/technos/amazoncloudwatch.svg', alt: 'CloudWatch' },
      { src: '/technos/amazondynamodb.svg', alt: 'Dynamodb' },
      { src: '/technos/amazonec2.svg', alt: 'EC2' },
      { src: '/technos/amazonecs.svg', alt: 'ECS' },
      { src: '/technos/amazonrds.svg', alt: 'RDS' },
      { src: '/technos/amazonroute53.svg', alt: 'Route53' },
      { src: '/technos/amazons3.svg', alt: 'S3' },
      { src: '/technos/amazonwebservices.svg', alt: 'AWS' },
    ],
  };

  export const TechnosTypes = [
    {name:'Web', type:'web', style:'row-start-1 row-span-2' },
    {name:'Devops', type:'devops', style:'row-start-1 row-span-1'},
    {name:'Cloud', type:'cloud', style:'row-start-2 row-span-1'},
    {name:'Outil', type:'outil', style:'row-start-1 row-span-1'},
    {name:'Bdd', type:'db', style:'row-start-2 row-span-1'},
  ];

  export const sections = [
    {name:'PROJECTS', route:'/projects', img: 'projects.svg', style:'lg:row-start-1 lg:row-span-1 h-1/5 lg:h-full'},
    {name:'PARCOURS', route:'/career', img: 'teaching.svg', style:'lg:row-start-2 lg:row-span-1  h-1/5 lg:h-full'},
    {name:'SKILLS', route:'/skills', img: 'skills.svg', style:'lg:row-start-1 lg:row-span-1 h-1/5 lg:h-full'},
    {name:'RESUM', route:'/resum', img: 'resum.svg', style:'lg:row-start-2 lg:row-span-1 h-1/5 lg:h-full'},
    {name:'CONTACT', route:'/contact', img: 'contact.svg', style:'lg:row-span-3 h-1/5 lg:h-full'},
  ]

