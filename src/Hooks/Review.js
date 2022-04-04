import { useEffect, useState } from "react";

const useReviewData = () => {
  const [reviewAllData, setReviewAllData] = useState([]);
  useEffect(() => {
    fetch('reviewData.json')
      .then((res) => res.json())
      .then((data) => setReviewAllData(data));
  }, []);

  return [reviewAllData, setReviewAllData];
};

export default useReviewData;
