import style from './About.module.css'

const About = () => {
  return (
    <div className={style.containerAbout}>
      <h1>Acerca de mi</h1>
      <h3>Jorge Sánchez</h3>
      <p>Aplicacion de React en constante desarrollo y actualización</p>
      <img className={style.img} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDsVh5ykxF_5dW9U9-jnt3rYor9gboAlMzBgyHULv26k23-0PgKBFAexKVSgxvmu5UNkFbkK_2dQETcOpGvnojjQokdHm_r0sJWDeO75VEMcGcKOC4V34UXI7s37hYfBSu3OmHekr2Y0-B34n2qceLfuUWORZx3tDq9Md3ycbIcjqcRKkLM9l-NlIl/s1440/rick-morty-temporada-5-2319587.webp" alt="trabajando" />
      <br />
    </div>
  );
};
export default About;
