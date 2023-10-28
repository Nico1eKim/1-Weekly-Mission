import CardImage from "./CardImage";
import CardTime from "./CardTime";
import CardContent from "./CardContent";
import CardDate from "./CardDate";
import { getTimeDiff, formatDate } from "./getTime";

import noImg from "../../image/noimg.svg";

const Card = ({ item }) => {
  const { id, createdAt, url, description, imageSource } = item;
  const get_time = getTimeDiff(createdAt);
  const get_date = formatDate(createdAt);

  return (
    <a className="card_block" href={url} key={id}>
      <div className="image_area">
        {imageSource ? (
          <CardImage src={imageSource} />
        ) : (
          <CardImage className="img_not_loaded" src={noImg} />
        )}
      </div>
      <div className="description_area">
        <CardTime set_time={get_time} />
        <CardContent>{description}</CardContent>
        <CardDate set_date={get_date} />
      </div>
    </a>
  );
};

export default Card;