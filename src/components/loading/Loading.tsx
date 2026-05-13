import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f7f4ef]">

      <div className="w-[250px] md:w-[350px]">

        <DotLottieReact
          src="https://lottie.host/0f1aa076-4f4e-4ee1-aa1b-f86c223bd2d8/sEkeevv9IF.lottie"
          loop
          autoplay
        />

      </div>

    </div>
  );
};

export default Loading;