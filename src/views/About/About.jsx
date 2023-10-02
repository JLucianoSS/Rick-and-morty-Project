import style from './About.module.css'
import imgDev from '../../assets/images/dev.jpeg';

const About = () => {
  return (
    <div className={style.containerAbout}>
      <h1 className={style.title}>Acerca de mi</h1>
      <img className={style.img} src={imgDev} alt="trabajando" />
      <h3 className={style.title}>Jorge Sánchez</h3>
      <p className={style.description}>Hola 👋, gracias por ver mi humilde proyecto. En agradecimiento por visitar este sitio te contaré un chiste. Ahí va: Ser programador es como ser un mago, pero en lugar de lanzar hechizos, escribimos código. Y cuando algo no funciona, no decimos '¡Abracadabra!', sino '¡Stack Overflow! 🤣</p>
      <br />
    </div>
  );
};
export default About;
