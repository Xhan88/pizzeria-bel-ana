export const ComboCard = () => {
    return (
      <div className="mt-8 rounded-[28px] overflow-hidden relative min-h-[500px] shadow-xl">
  
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b4d2c] via-[#14532d] to-[#0b4d2c]" />
  
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
  
          <div>
  
            <h3 className="text-white text-5xl font-bold leading-tight">
              Combo
              <br />
              Familiar
            </h3>
  
            <div className="w-24 h-[2px] bg-white mt-5" />
  
          </div>
  
          <div className="relative flex justify-center mt-6">
  
            <img
              src="/combo.png"
              alt="Combo Pizza"
              className="w-[280px] scale-180 object-contain drop-shadow-2xl"
            />
  

          </div>
  
          <div className="space-y-4 mt-8 text-white text-xl">
  
            <div className="flex items-center gap-3">
              <span>🍕</span>
              <p>1 Pizza familiar (2 sabores)</p>
            </div>
  
            <div className="flex items-center gap-3">
              <span>🥤</span>
              <p>1 Bebida 1.5 L</p>
            </div>
  
            <div className="flex items-center gap-3">
              <span>🧄</span>
              <p>Pan de ajo</p>
            </div>
  
          </div>
  
          <div className="mt-10">
  
            <div className="bg-white rounded-full py-4 text-center">
  
              <span className="text-[#c6372d] text-4xl font-bold">
                $32.000
              </span>
  
            </div>
  
          </div>
  
        </div>
      </div>
    );
  };