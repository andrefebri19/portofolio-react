function Hobby() {
  return (
    <section className="hobby" id="hobby">
      <h2 className="heading">
        My <span>Hobby</span>
      </h2>
      <div className="hobby-container">
        <div className="hobby-box">
          <img src={require("../asset/img/game.jpg")} alt="" />
          <div className="hobby-layer">
            <h4>Main Game</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?</p>
          </div>
        </div>

        <div className="hobby-box">
          <img src={require("../asset/img/anime.jpg")} alt="" />
          <div className="hobby-layer">
            <h4>Nonton Anime</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?</p>
          </div>
        </div>

        <div className="hobby-box">
          <img src={require("../asset/img/berenang.jpg")} alt="" />
          <div className="hobby-layer">
            <h4>Renang</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aut?</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobby;
