import styled from "./home.module.css";
import Article from "../../components/Articles/article";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <div className={styled.homeWrapper}>
      <Navbar title="کسری" />
       <div className="container">
      <h2>
        Home
      </h2>
     
        <div className={styled.articles}>
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
}
export default Home;
