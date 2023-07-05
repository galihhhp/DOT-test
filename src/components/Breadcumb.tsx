import React from "react";

type Props = {
  items: Array<{
    title: string;
    link: string;
  }>;
};

const Breadcumb = ({ items }: Props) => {
  const lastItem = items[items.length - 1];
  return (
    <div className="flex gap-2">
      {items.map((item, i) => {
        return (
          <div className="flex gap-2 items-center text-medium-grey" key={i}>
            <p
              className={`text-12 2xl:text-14 font-semibold ${
                item === lastItem ? "text-primary" : "text-medium-grey"
              }`}>
              {item.title}
            </p>
            {item !== lastItem && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcumb;
