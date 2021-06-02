import React from "react";

function Results({ data }) {
  const setBackground = (status) => {
    if (status === 200) return "bg-green-500 text-white";
    if (status >= 301 || status >= 304) return "bg-yellow-400 text-black";
  };

  return (
    <>
      {data && (
        <div className="container mx-auto">
          <div>
            <div>
              <strong>Status</strong> :{" "}
              <small
                className={`${setBackground(
                  data?.status
                )} font-semibold py-1 inline-block px-2 rounded`}
              >
                {data?.status}
              </small>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default Results;
