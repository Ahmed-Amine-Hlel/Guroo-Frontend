const PayementScreen = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#F4EDFB] px-[10px] lg:px-[50px] xl:px-[100px] py-[20px] font-plus-jakarta-sans"
      style={{
        backgroundImage: `url(/Layer_1.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row w-full md:items-center justify-between mb-10">
        <div className="text-medium text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px] text-[#743FA8] mb-4 md:mb-0">
          Merci ! De quoi avez vous besoin ?
        </div>
        <div className="text-[14px] lg:text-[16px] w-max flex gap-[8px] bg-white rounded-[88px] border border-[#F4EBFF] p-[8px]">
          <button className="rounded-[62px] text-white btn-shadow bg-[#914FD2] py-[10px] px-[14px] hover:bg-[#8347bd]">
            Particulier
          </button>
          <button className="rounded-[62px] text-[#914FD2] py-[10px] px-[14px]">
            Professionnel
          </button>
        </div>
      </div>

      <div className="px-2 sm:px-20 md:px-14 flex flex-col lg:flex-row justify-center items-center">
        <div className="bg-white p-[20px] w-full h-full rounded-[32px] lg:rounded-tr-none lg:rounded-br-none lg:mr-[-5px] mb-[50px] lg:mb-0">
          <div className="mb-[16px] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-center text-[#331C4A]">
            Résumé de votre projet
          </div>
          <div className="text-center text-[#914FD2] text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-medium">
            Gratuit
          </div>
          <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-center text-[#7D6990] mb-[16px]">
            Pour comprendre comment votre business fonctionne
          </div>

          <hr className="mb-[32px]" />
          <div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Access to all basic features
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="mr-[5px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Access to all basic features
              </div>
              <div className="flex justify-center items-center text-[#914FD2] px-[5px] py-[2px] bg-[#EFE5F8] text-[10px] md:text-[12px] rounded-[7px] ">
                New
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Basic reporting and analytics
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Up to 10 individual users
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                20GB individual data each user
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Basic chat and email support
              </div>
            </div>
            <hr className="mb-[32px]" />

            <button className="flex justify-center items-center gap-[8px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] px-[20px] py-[12px] w-full text-white rounded-[8px] bg-[#914FD2] hover:bg-[#8347bd]">
              <span>Obtenir mon résumé gratuit</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M5.79297 12.7363H19.793M19.793 12.7363L12.793 5.73633M19.793 12.7363L12.793 19.7363"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecapp="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="z-50 bg-[#FAF5FF] card-shadow border-[2px] border-[#ddc8f1] p-[20px] w-full rounded-[32px] mb-[50px] lg:mb-0">
          <div className="-translate-y-[40px] flex justify-center">
            <div className="text-white rounded-[8px] px-[28px] py-[10px] bg-gradient-to-b from-[#914FD2] from-0% to-[#C78EFF] to-100%">
              Le plus populaire
            </div>
          </div>
          <div className="mt-[-12px] mb-[16px] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-center text-[#331C4A]">
            Business plan clé en main
          </div>
          <div className="text-center text-[#914FD2] text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-medium">
            49€ TTC
          </div>
          <div className="mb-[50px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-center text-[#7D6990] mb-[16px]">
            Idéal pour avoir une idée de votre business
          </div>
          <hr className="mb-[32px]" />
          <div className="mb-[46px]">
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="mr-[5px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Access to all basic features
              </div>
              <div className="flex justify-center items-center text-[#914FD2] px-[5px] py-[2px] bg-[#EFE5F8] text-[10px] md:text-[12px] rounded-[7px] ">
                New
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="mr-[5px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Access to all basic features
              </div>
              <div className="flex justify-center items-center text-[#914FD2] px-[5px] py-[2px] bg-[#EFE5F8] text-[10px] md:text-[12px] rounded-[7px] ">
                New
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Up to 10 individual users
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                20GB individual data each user
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Basic chat and email support
              </div>
            </div>
            <hr className="mb-[32px]" />

            <button className="flex justify-center items-center gap-[8px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] px-[20px] py-[12px] w-full text-white rounded-[8px] bg-[#914FD2] hover:bg-[#8347bd]">
              <span>Obtenir mon business plan</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M5.79297 12.7363H19.793M19.793 12.7363L12.793 5.73633M19.793 12.7363L12.793 19.7363"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecapp="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white p-[20px] w-full rounded-[32px] lg:rounded-tl-none lg:rounded-bl-none lg:ml-[-5px] mb-[50px] lg:mb-0">
          <div className="mb-[16px] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-center text-[#331C4A]">
            Business plan <span className="text-[#914FD2]">PRO</span>
          </div>
          <div className="text-center text-[#914FD2] text-[#914FD2] text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-medium">
            79€ TTC
          </div>
          <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-center text-[#7D6990] mb-[16px]">
            Idéal pour présenter à vos partenaires et a votre banque.
          </div>

          <hr className="mb-[32px]" />
          <div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Access to all basic features
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="mr-[5px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Basic reporting and analytics
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Up to 10 individual users
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                20GB individual data each user
              </div>
            </div>
            <div className="flex gap-[12px] mb-[16px]">
              <div>
                <img
                  src="/check-icon.svg"
                  alt="check-icon"
                  className="w-[24px] object-contain"
                />
              </div>
              <div className="text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
                Basic chat and email support
              </div>
            </div>
            <hr className="mb-[32px] lg:mb-[72px]" />

            <button className="flex justify-center items-center gap-[8px] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] px-[20px] py-[12px] w-full text-[#914FD2] border border-[#914FD2] rounded-[8px]">
              <span>Rejoindre la file d’attente</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M5.79297 12.7363H19.793M19.793 12.7363L12.793 5.73633M19.793 12.7363L12.793 19.7363"
                    stroke="#914FD2"
                    strokeWidth="1.66667"
                    strokeLinecapp="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayementScreen;
