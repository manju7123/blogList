import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogItems} = props
  return (
    <ul className="list-container">
      {blogItems.map(each => (
        <BlogItem key={each.id} listItems={each} />
      ))}
    </ul>
  )
}
export default BlogList
