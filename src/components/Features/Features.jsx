const Features = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      <div className="w-[55%] h-[35vh] grid grid-cols-4 grid-rows-1 gap-x-[10px] gap-y-0">
        <div className="w-full h-full flex flex-col justify-around items-center">
          <div className="w-[190px] h-[190px]">
            <img src="../../../public/images/features/customer.png" alt="customer" className="w-full h-full" />
          </div>
          <div className="py-[15px] box-border font-[iranSans] text-base text-center font-extralight text-[#7c7d7e]">مشتریان گلستان</div>
          <div className="w-[97%] border-[0.8px] border-solid border-[rgb(230,229,229)] "></div>
        </div>
        <div className="w-[190px] h-[190px]">
          <img src="../../../public/images/features/products.png" alt="products" />
          <div className="py-[15px] box-border font-[iranSans] text-base text-center font-extralight text-[#7c7d7e]">محصولات گلستان</div>
          <div className="w-[97%] border-[0.8px] border-solid border-[rgb(230,229,229)] "></div>
        </div>
        <div className="w-[190px] h-[190px]">
          <img src="../../../public/images/features/market.png" alt="market" />
          <div className="py-[15px] box-border font-[iranSans] text-base text-center font-extralight text-[#7c7d7e]">مراکز فروش</div>
          <div className="w-[97%] border-[0.8px] border-solid border-[rgb(230,229,229)] "></div>
        </div>
        <div className="w-[190px] h-[190px]">
          <img src="../../../public/images/features/people.png" alt="worker" />
          <div className="py-[15px] box-border font-[iranSans] text-base text-center font-extralight text-[#7c7d7e]">سرمایه انسانی</div>
          <div className="w-[97%] border-[0.8px] border-solid border-[rgb(230,229,229)] "></div>
        </div>
      </div>
    </div>
  );
};

export default Features;
