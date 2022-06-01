import { SkeletonCard } from "./style";

function Skeleton() {
  const array = [0, 1, 0, 1, 0, 1];
  return (
    <>
      {array.map((num, index) => (
        <SkeletonCard key={index}>
          <div className="skeleton--img"></div>
          <div className="skeleton--name"></div>
          <div className="skeleton--category"></div>
          <div className="skeleton--price"></div>
          <div className="skeleton--button"></div>
        </SkeletonCard>
      ))}
    </>
  );
}

export default Skeleton;
