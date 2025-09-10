import image from "./../../asets/images/design_resolution_original.jpg"
import styled from "./article.module.css";
function Article() {
  return (
    
      <div className={styled.ArticleHolder}>

        <img src={image} alt="bird" />
        <h3>متغیرها در جاوا اسکریپت</h3>
        <p>خواندن 5 دقیقه ای</p>

      </div>
        
  );
}
export default Article;
