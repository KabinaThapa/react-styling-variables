import "./Style.css";
function App() {
  const box1 = "Story";
  const box2 = "Gallery";
  const box3 = "GetStarted";

  return (
    <>
      <div class="outline">
        <div class="circle"></div>
        <div class="line"></div>
        <div class="line2"></div>
        <div class="head">
          <h1> Dimensions</h1>
          <div class="b">
            <h3>{box1}</h3>
            <h3>{box2}</h3>
            <button class="button">{box3}</button>
          </div>
        </div>
        <div class="line2"></div>
        <div class="line"></div>
        <div class="box">
        <ul>
            <li>
              <a class="home" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="about" href="#">
                About
              </a>
            </li>
            <li>
              <a class="contact" href="#">
                Contact
              </a>
            </li>
            <li>
              <a class="projects" href="#">
                Projects
              </a>
            </li>
          </ul>
        </div>
        </div>
    </>
  );
}

export default App;
