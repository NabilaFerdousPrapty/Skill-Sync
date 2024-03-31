import bg from "../../assets/bg.svg";
import pic from '../../assets/Illustration - pavan 691.png'

export const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})`,transform: 'rotate(180deg)'  }}
    >
      <div style={{transform: 'rotate(180deg)'}} className="hero-content  text-center justify-between flex-row-reverse">
        <img src={pic} alt="" />
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">
            {" "}
            Skill Sync : Learn & Grow
          </h1>
          <p className="mb-5 ">
            Explore what professionals like you are learning the most in the
            world of technology. We have a wide range of courses to help you
            grow your career.
          </p>
          <button className="btn bg-[#007E7E] ">Visit Courses</button>
        </div>
      </div>
    </div>
  );
};
