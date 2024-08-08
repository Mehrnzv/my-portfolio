export const navlinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Tab_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content : (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>React</li>
        <li>Next.js</li> 
        <li>Framer motion</li> 
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content : (
      <ul className="list-disc pl-2">
        <li>Computer Engineering at Shahrood University of Technology</li>
      </ul>
    )
  },
]

export const ProjectData = [
  {
    id:1,
    title: "Restaurant menu",
    stack: 'React js',
    desc : 'This website allows you to view the currently available menu items at the restaurant.',
    image: '/images/projects/Design1.png',
    path: 'https://github.com/Mehrnzv/restaurant-menu'
  },
  {
    id:2,
    title: "Movie application",
    stack: 'React js, Redux, Sass',
    desc : 'You can search for movies and TV shows, explore their details, and filter them by genre, popularity, and more. You can also watch trailers of the movies.',
    image: '/images/projects/Design2.png',
    path: 'https://github.com/Mehrnzv/Movie-app'
  },
  {
    id:3,
    title: "E-commerce application",
    stack: 'React js, Redux, Tailwind CSS',
    desc : 'This website enables you to explore products, filter them by category, price and rating, add items to your cart, and create your own wishlist.',
    image: '/images/projects/Design3.png',
    path: 'https://github.com/Mehrnzv/Shop-wave'
  },
]