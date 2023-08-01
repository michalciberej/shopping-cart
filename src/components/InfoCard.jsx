import Icon from "@mdi/react";

const InfoCard = ({ heading, info, icon }) => {
  return (
    <div className="min-h-full text-text dark:text-textD bg-secondary dark:bg-secondaryD rounded-xl p-8 shadow-md relative hover:-translate-y-1 hover:shadow-lg transition-all">
      <div className="flex justify-between">
        <h2 className="text-2xl mb-8 ">{heading}</h2>
        <Icon path={icon} size={1.5} />
      </div>
      <p className="text-lg max-w-prose">{info}</p>
    </div>
  );
};

export default InfoCard;
