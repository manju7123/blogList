import './index.css'

const BlogItem = props => {
  const {listItems} = props
  const {title, description, publishedDate} = listItems
  return (
    <li className="list-item">
      <div className="inner-card">
        <h1 className="title">{title}</h1>
        <p className="date"> {publishedDate}</p>
      </div>
      <p className="paragraph"> {description}</p>
    </li>
  )
}
export default BlogItem
