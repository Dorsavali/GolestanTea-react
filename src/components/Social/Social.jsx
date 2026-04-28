const Social = () => {
  return (
<div className="w-full h-[600px] bg-[#105153] flex flex-col justify-center items-center border-b-[21px] border-[#e9d69f] relative">
<div className="text-[#d5ece1] font-[IranSans] text-[18px] font-light"></div>
<div className="w-full border-b border-[#0b6568] py-[10px] box-border"></div>
<div className="flex items-center justify-center gap-[5px] text-[#009da2] font-[IranSans] text-[30px] font-normal">
  Golestan
  <h6 className="text-[#00d8df] font-[IranSans] font-normal">
    Social Responsibility
  </h6>
</div>
<div className="text-[#bcbec0] font-[IranSans] text-[17px] font-light pb-5 box-border">
  Mahdi Hospital
</div>
<div className="w-[395px] h-[344px] absolute top-[60%]">
  <img
    src="../../../public/images/social.jpg"
    alt="mahdi hospital"
    className="w-full h-full"
  />
</div>
</div>
  );
};
export default Social;
