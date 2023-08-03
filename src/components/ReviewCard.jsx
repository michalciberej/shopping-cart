import Stars from "./Stars";

const ReviewCard = ({ firstName, lastName, picture, rating }) => {
  return (
    <div className="p-8 text-text dark:text-textD bg-secondary dark:bg-secondaryD rounded-md shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="flex items-center gap-8 mb-6">
        <img src={picture} className="rounded-full"></img>
        <div className="flex flex-col">
          <span className="text-lg">{`${firstName} ${lastName}`}</span>
          <Stars rating={rating} dir={"row"} />
        </div>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iusto minima quidem, nostrum ipsa placeat natus hic magni distinctio
        aliquam quisquam porro eligendi dolorem quos id deserunt quaerat culpa
        sint.
      </span>
    </div>
  );
};

export default ReviewCard;
