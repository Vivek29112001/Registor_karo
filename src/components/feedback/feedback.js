import './feedback.css';

const testimonials = [
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    rating: 5,
    image: "https://img.goodfon.com/wallpaper/nbig/f/31/donald-tramp-prezident-ssha-jon-mcnaughton-maga-ride.webp"
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    rating: 5,
    image: "https://img.goodfon.com/wallpaper/nbig/f/31/donald-tramp-prezident-ssha-jon-mcnaughton-maga-ride.webp"
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    rating: 5,
    image: "https://img.goodfon.com/wallpaper/nbig/f/31/donald-tramp-prezident-ssha-jon-mcnaughton-maga-ride.webp"
  },
  {
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    rating: 5,
    image: "https://img.goodfon.com/wallpaper/nbig/f/31/donald-tramp-prezident-ssha-jon-mcnaughton-maga-ride.webp"
  },
];

const faqs = [
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
];

function Feedback() {
  return (
    <div className="Feedback">
      <section className="testimonials">
        <h2>What people say about us</h2>
        <div className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="quote">{testimonial.quote}</div>
              <div className="rating">
                {'★'.repeat(testimonial.rating)}
                {'☆'.repeat(5 - testimonial.rating)}
              </div>
              <div className="author">
                <img src={testimonial.image} alt="Profile" />
                <div className="author-info">
                  <div className="name">{testimonial.name}</div>
                  <div className="title">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="prev">‹</button>
          <button className="next">›</button>
        </div>
      </section>
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index}>{faq}</li>
          ))}
        </ul>
        <button className="show-more">Show more</button>
      </section>
    </div>
  );
}

export default Feedback;
