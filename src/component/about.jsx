function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={require("../asset/img/2_koleksi.jpg")} alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Student at Purwadhika!</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate eos assumenda quae eius quaerat necessitatibus porro minima adipisci? Autem praesentium dolorum delectus, culpa aliquid sit est rem cupiditate sint corrupti
          voluptates tenetur incidunt a, nam aut doloremque perferendis? Molestias, perspiciatis.
        </p>
        <a href="google.com" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
}

export default About;
