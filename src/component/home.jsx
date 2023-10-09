function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, My Name</h3>
        <h1>Andre Febrianto</h1>
        <h3>
          and I'm a <span>Student at Purwadhika</span>
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta inventore,</p>
        <p>numquam accusamus ducimus itaque ea?</p>
        <div className="social-media">
          <a href="google.com">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="google.com">
            <i className="bx bxl-discord-alt"></i>
          </a>
          <a href="google.com">
            <i className="bx bxl-github"></i>
          </a>
          <a href="google.com">
            <i className="bx bxl-linkedin-square"></i>
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src={require("../asset/img/IMG_0666.JPG")} alt="" />
      </div>
    </section>
  );
}

export default Home;
