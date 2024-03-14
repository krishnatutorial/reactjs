// Write your code here.

import './index.CSS'

const UserCard = props => {
  const {bannerCard} = props
  const {headText, description, className, key} = bannerCard
  return (
    <li className={className}>
      <h1>{headText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default UserCard
