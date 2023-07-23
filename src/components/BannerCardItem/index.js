// Write your code here.
const BannerCardItem = props => {
  const {items} = props
  const {title, description} = items
  return (
    <li>
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  )
}

export default BannerCardItem
