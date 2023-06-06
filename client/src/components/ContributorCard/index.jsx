import React from "react";

function ContributorCard({contributor,index}) {
  return (
    <div
      key={contributor?.id}
      className={`flex flex-col items-center space-y-4 text-center  ${
        index % 10 >= 8 ? "ml-8" : ""
      }`}
    >
      <a
        rel="noopener noreferrer"
        href={`https://github.com/${contributor?.login}`}
        aria-label="GitHub"
        className="p-2 rounded-md hover:text-violet-400"
      >
        <img
          src={contributor?.avatar_url}
          alt=""
          className="w-32 h-32 mx-auto rounded-full" loading="lazy"
        />
      </a>
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-violet">
          {contributor?.login}
        </h2>
        <p className="text-xs">{`Contributions: ${contributor?.contributions}`}</p>
      </div>
    </div>
  );
}

export default ContributorCard;
