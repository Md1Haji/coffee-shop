const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Coffee Roasting",
      image: "bcofee1.jpeg",
      excerpt: "Discover the intricate process behind perfect coffee roasting and how it affects the flavor profile of your favorite brew.",
      date: "December 2024",
      author: "Master Roaster John"
    },
    {
      id: 2,
      title: "Sustainable Coffee Farming",
      image: "bcofee2.jpeg",
      excerpt: "Learn about our commitment to ethical sourcing and how we support sustainable coffee farming practices worldwide.",
      date: "November 2024",
      author: "Sarah Green"
    },
    {
      id: 3,
      title: "Perfect Brewing Techniques",
      image: "bcofee3.jpeg",
      excerpt: "Master the art of home brewing with our expert tips and techniques for creating café-quality coffee at home.",
      date: "October 2024",
      author: "Barista Mike"
    }
  ];

  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        Latest <span>Coffee Insights</span>
      </h1>
      <div className="box-container">
        {blogPosts.map((post) => (
          <div className="box" key={post.id}>
            <div className="image">
              <img src={`/images/${post.image}`} alt={post.title} />
            </div>
            <div className="content">
              <a href="#" className="title">{post.title}</a>
              <span>by {post.author} / {post.date}</span>
              <p>{post.excerpt}</p>
              <a href="#" className="btn">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;