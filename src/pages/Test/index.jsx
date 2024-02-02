// import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useGetData from "../../hooks/GET";

function Test() {
  const { data, isLoading } = useGetData(["products"], "/products");

  console.log(data);

  useEffect(() => {
    fetch("https://greenlifeuz.onrender.com/greenlife/main/get-partners").then(res => res.join()).then(data => console.log(data))
  }, [])

  if (isLoading) {
    return (
      <div className="gap-top">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="gap-top">
      <h1>Hello</h1>
    </div>
  );
}

export default Test;
