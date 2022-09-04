import React from "react";

const SearchStatus = (props) => {
  let length = props.users.length;
  const meetinCount =
    length === 0
      ? "Никто не тусанет с тобой сегодня"
      : length === 1 || length >= 5
      ? `${length} человек тусанет с тобой сегодня`
      : `${length} человека тусанет с тобой сегодня`;

  return (
    <h2>
      <span
        className={"badge text-bg-" + (length === 0 ? "danger" : "primary")}
      >
        {meetinCount}
      </span>
    </h2>
  );
};

export default SearchStatus;
