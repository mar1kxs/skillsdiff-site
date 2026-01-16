import "../styles/not-found.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <main className="notfound-page">
      <span>404</span>
      <div className="notfound-text">
        <h1>УПС! Эта страница не существует</h1>
        <p>
          Страница не найдена <br /> Вернёмся к прокачке навыков
        </p>
      </div>
      <button onClick={() => navigate("/")}>Вернуться на главную</button>
    </main>
  );
};

export default NotFoundPage;
