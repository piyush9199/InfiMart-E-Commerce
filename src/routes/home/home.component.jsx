// import { Outlet } from 'react-router-dom'
import { Directory } from '../../components/directory/directory.component'
export function Home() {

  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: './images/pexels-sevenstormphotography-396777.jpg'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: './images/pexels-romanp-16170.jpg'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: './images/pexels-athena-1858407.jpg'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: './images/pexels-yogendras31-2965095.jpg'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: './images/pexels-the-earthy-jay-380084919-14739964.jpg'
    }
  ]

  return (
    <div>
        <Directory categories={categories} />
    </div>
  )
}
