
import style from "./Error.module.css"

const Error = () => {
  return (
    <div className={style.containerPageNotFound}>
      <h1>Página no encontrada</h1>
      <h2> error 404</h2>
      <img src="https://media.tenor.com/nRIK1wAczdgAAAAd/que-mira-bobo-anda-pa-alla.gif" alt="page-not-found" />
    </div>
  );
};

export default Error;
