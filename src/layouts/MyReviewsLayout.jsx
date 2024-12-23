import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import MyReviewsCard from "../components/MyReviewsCard";

const MyReviewsLayout = () => {
  const data = useLoaderData();
  const [myReviews,setMyReviews] = useState(data);

  useEffect(() => {
    document.title = "Chill Gamer - My Reviews";
  }, []);

  return (
    <div className="overflow-x-auto bg-black calc(100vh - 467px)"  style={{ height: "calc(100vh - 447px)" }}>
      <table className="table">
        <thead>
          <tr>
            <th className="text-white">Serial</th>
            <th className="text-white">Name</th>
            <th className="text-white">Rating</th>
            <th className="text-white">Update</th>
            <th className="text-white">Delete</th>
            <th className="text-white"></th>
          </tr>
        </thead>
        <tbody>
          {myReviews.map((review, index) => (
            <MyReviewsCard
              key={review._id}
              index={index}
              review={review}
              setMyReviews={setMyReviews}
              myReviews={myReviews}
              data={data}
            ></MyReviewsCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewsLayout;
