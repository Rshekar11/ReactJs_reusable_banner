import './index.css'

const BannerCardItem = props => {
  const {vj} = props
  const {headerText, description, className} = vj
  return (
      <li className={className}>
          <h1>{headerText}</h1>
          <p>{description}</p>
          <button>show more</button>
    
      </li>
  )
}

export default BannerCardItem
