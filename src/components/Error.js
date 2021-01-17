import React from "react";

const ErrorCard = (error) => {
  return (
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default ErrorCard;