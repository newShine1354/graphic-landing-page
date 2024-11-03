import React from "react";
import Button from "./common/Button";

const PageOne = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-[46px] text-tertiary font-bold">
          Helping the <span className="text-secondary">world's greatest</span>{" "}
          creators create.
        </h1>
        <p className="text-text w-[400px] text-center text-[17px]">
          Taking content creation to the next level with our post production and
          growth strategy services.
        </p>
        <Button content="Equire now!" />
      </div>
    </div>
  );
};

export default PageOne;
