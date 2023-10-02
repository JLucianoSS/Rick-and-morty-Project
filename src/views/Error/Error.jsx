
import style from "./Error.module.css"

const Error = () => {
  return (
    <div className={style.containerPageNotFound}>
      <h1 className={style.title}>Not Found - 404 </h1>
      <img className={style.img} src="https://media.tenor.com/nRIK1wAczdgAAAAd/que-mira-bobo-anda-pa-alla.gif" alt="page-not-found" />
    </div>
  );
};

export default Error;
