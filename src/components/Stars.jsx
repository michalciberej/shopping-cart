import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

const Stars = ({ rating, dir }) => {
  let arr = [];
  for (let i = 0; i <= 5; i++) {
    if (i < rating)
      arr.push(
        <Icon path={mdiStar} size={1} className="text-primary" key={i} />
      );
    if (i > rating)
      arr.push(<Icon path={mdiStar} size={1} className="text-black" key={i} />);
  }

  return <div className={`flex flex-${dir}`}>{arr}</div>;
};

export default Stars;
