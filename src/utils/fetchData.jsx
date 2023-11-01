import { useEffect } from "react";

export const fetchData = (setOutlines) => {
  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const data = await fetch("DATA.json");
        const res = await data.json();
        setOutlines(res);
      };
      fetchData();
    }, 1000);
  }, []);
};
