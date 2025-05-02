import React from "react";

const RepoCard = ({ details }) => {
  return (
    <div className="bg-[#1c2333] p-4 m-6 rounded-xl text-white w-[450px] max-w-md shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-semibold mb-2">
        <a
          href={details.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          {details.name}
        </a>
      </h2>

      {/* Description */}
      <p className="text-sm mb-4">
        {details.description ? details.description : "No description available."}
      </p>

      {/* Languages */}
      <div className="flex flex-wrap gap-2 mb-4">
        {details.languages.map((lang, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium`}
            style={{ backgroundColor: getLanguageColor(lang.name)[0],color: getLanguageColor(lang.name)[1] }}
          >
            {lang.name}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-6 text-sm">
        <span>⭐ {details.stargazers_count}</span>
        <span>🔗 {details.forks_count}</span>
        <span>🛠️ {details.open_issues_count}</span>
      </div>
    </div>
  );
};

// Helper to get colors
const getLanguageColor = (lang) => {
  const colors = {
    HTML: ["#e34c264d","#e34c26"],
    CSS: ["#563d7c4d","#A289C6"],
    JavaScript: ["#f1e05a4d","#f1e05a"],
    TypeScript: ["#3178c64d","#3178c6"],
    Java: ["#b072194d","#b07219"],
    "Objective C": ["#438eff4d","#438eff"],
    Dart: ["#00B4AB4d","#00B4AB"],
  };
  return colors[lang] || "#6b7280"; // default: gray
};

export default RepoCard;
