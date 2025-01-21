import './blog.css';

const BlogPost = ({ image, author, date, title, description, tags }) => {
  return (
    <div className="blog-post">
      <img src={image} alt={title} className="blog-image" />
      <div className="blog-content">
        <p className="blog-author">{author} • {date}</p>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
        {tags && Array.isArray(tags) && (
          <div className="blog-tags">
            {tags.map(tag => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
