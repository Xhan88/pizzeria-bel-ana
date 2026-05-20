export const ComboCard = () => {
  return (
    <div className="mt-8 rounded-[28px] overflow-hidden relative shadow-xl min-h-[270px] lg:min-h-[500px]">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b4d2c] via-[#14532d] to-[#0b4d2c]" />

      {/* MOBILE IMAGE */}
      <img
        src="/combo.png"
        alt="Combo Pizza"
        className="
          absolute
          right-[-20px]
          bottom-[50px]
          w-[240px]
          z-0
          object-contain
          lg:hidden
        "
      />

      {/* DESKTOP IMAGE */}
      <div className="hidden lg:flex relative justify-center mt-6 z-10">
        <img
          src="/combo.png"
          alt="Combo Pizza"
          className="w-[230px] scale-140 object-contain drop-shadow-2xl"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-5 lg:p-8 h-full flex flex-col justify-between">

        {/* TITLE */}
        <div>

          <h3 className="text-white text-[34px] lg:text-5xl font-bold leading-none lg:leading-tight">
            Combo
            <br />
            Familiar
          </h3>

          <div className="w-16 lg:w-24 h-[2px] bg-white mt-3 lg:mt-5" />

        </div>

        {/* FEATURES */}
        <div className="space-y-2 lg:space-y-2 mt-5 lg:mt-8 text-white text-sm lg:text-xl max-w-[170px] lg:max-w-full">

          <div className="flex items-center gap-2 lg:gap-3">
            <span>🍕</span>
            <p>1 Pizza familiar (2 sabores)</p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <span>🥤</span>
            <p>1 Bebida 1.5 L</p>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <span>🧄</span>
            <p>Pan de ajo</p>
          </div>

        </div>

        {/* PRICE */}
        <div className="mt-6 lg:mt-10">

          <div className="bg-white rounded-full py-2 lg:py-4 px-6 w-fit">

            <span className="text-[#c6372d] text-3xl lg:text-2xl font-bold">
              $32.000
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};