import NavBar from "../app/components/NavBar"
export default function Home() {
  return (
    <div>
      <NavBar></NavBar> 
    <main>
    <h1 className="text-green">Frutiger Aero</h1>
    <p className="texto-bienvenida">Bienvenido a Frutiger Aero, un rincón de nostalgia donde revivimos los mejores momentos de la era dorada del diseño y la tecnología. 
  Recuerda aquellos días en los que la simplicidad y la elegancia se fusionaban en cada pixel</p>
    </main>
    <div className="gallery-container">
        <div className="gallery-item">
          <img src="image1.jpg"/>
        </div>
        <div className="gallery-item">
          <img src="image2.jpg" />
        </div>
        <div className="gallery-item">
          <img src="image3.webp" />
        </div>
        <div className="gallery-item">
          <img src="image4.webp" />
        </div>
        <div className="gallery-item">
          <img src="image5.webp" />
        </div>
          <img src="image6.jpg" />
      </div>
    <footer>
      <p>Elaborado por Ricardo Misael Nuñez Zaragoza</p>
    </footer>
    </div>
  )
}
