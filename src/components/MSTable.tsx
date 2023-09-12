import { DatePicker, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const MSTable = () => {
  return (
    <div className="rounded-2xl bg-base-white w-[1121px] h-[792px] overflow-hidden text-center text-base text-foundation-purple-normal font-plus-jakarta-sans">
      <b className="absolute top-[43.84px] left-[calc(50%_-_527.5px)] text-21xl leading-[115.5%]">
        Votre masse salariale
      </b>
      <div className="absolute top-[177px] left-[calc(50%_-_545px)] rounded-2xl bg-ghostwhite-200 w-[1090px] h-[342px] overflow-hidden text-left text-sm text-foundation-purple-normal-hover">
        <div className="absolute top-[17px] left-[18px] flex flex-row items-start justify-start gap-[8px] text-slateblue-100">
          <div className="relative rounded-lg bg-plum-200 w-40 h-[79px] overflow-hidden shrink-0 text-xl">
            <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_43.5px)] leading-[130%] font-semibold">
              Fonction
            </div>
          </div>
          <div className="relative rounded-lg bg-plum-200 w-[140px] h-[79px] overflow-hidden shrink-0">
            <div className="absolute top-[18.5px] left-[calc(50%_-_57.27px)] leading-[106.5%] font-semibold flex items-center w-[84.49px]">
              Coût total employeur
            </div>
            <div className="absolute top-[calc(50%_+_12px)] left-[calc(50%_-_57.27px)] text-5xs leading-[106.5%] text-slateblue-200">
              (Dépensé par l'entreprise)
            </div>
            <div className="absolute top-[-75.84px] left-[0px] w-[140px] h-[89px] overflow-hidden" />
          </div>
          <div className="relative rounded-lg bg-plum-200 w-[140px] h-[79px] overflow-hidden shrink-0">
            <div className="absolute top-[17.5px] left-[calc(50%_-_56.91px)] leading-[130%] font-semibold">
              Salaire Brut
            </div>
            <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_56.91px)] text-5xs leading-[130%] text-slateblue-200 flex items-center w-[113.82px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0 font-medium">{`Brut de référence `}</p>
                <p className="m-0">
                  (sans les primes, indemnités ni majorations)
                </p>
              </span>
            </div>
          </div>
          <div className="relative rounded-lg bg-plum-200 w-[140px] h-[79px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_55.5px)] leading-[130%] font-semibold">
              Salaire net
            </div>
            <div className="absolute top-[calc(50%_+_6px)] left-[calc(50%_-_55.5px)] text-5xs leading-[130%] text-slateblue-200">
              (Salaire net avant impôt)
            </div>
          </div>
          <div className="relative rounded-lg bg-plum-200 w-[140px] h-[79px] overflow-hidden shrink-0">
            <div className="absolute top-[19.51px] left-[calc(50%_-_56.88px)] leading-[117.5%] font-semibold flex items-center w-[113.75px]">
              Salaire net après impôts
            </div>
            <div className="absolute top-[calc(50%_+_13.99px)] left-[calc(50%_-_56.88px)] text-5xs leading-[130%] font-medium text-slateblue-200">
              (Le salaire net payé)
            </div>
          </div>
          <div className="relative rounded-lg bg-plum-200 w-[140px] h-[79px] overflow-hidden shrink-0 text-center">
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_46.32px)] leading-[130%] font-semibold flex items-center justify-center w-[92.65px]">
              Date de démarrage
            </div>
          </div>
          <div className="relative rounded-lg bg-plum-200 w-[140px] h-[79px] overflow-hidden shrink-0 text-center">
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_46.32px)] leading-[130%] font-semibold flex items-center justify-center w-[92.65px]">
              Type de contrat
            </div>
          </div>
        </div>
        <div className="absolute top-[107px] left-[17.5px] flex flex-row items-start justify-start gap-[8px]">
          <div className="relative rounded-lg bg-ghostwhite-100 box-border w-40 h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active">
            <div className="absolute top-[calc(50%_-_5px)] left-[17.59px] leading-[130%] font-medium">
              Serveur
            </div>
          </div>
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_rgba(248,_241,_255,_0.58)] box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="3 426 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="2 332 €"
            type="text"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="2920 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="1 721 €"
            type="number"
          />
          <DatePicker
            className="relative"
            placeholder="27/03/2023"
            allowClear={false}
            bordered={false}
          />
        </div>
        <div className="absolute top-[162px] left-[17.5px] flex flex-row items-start justify-start gap-[8px]">
          <div className="relative rounded-lg bg-ghostwhite-100 box-border w-40 h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active">
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_62.41px)] leading-[130%] font-medium inline-block w-[103px]">
              Responsable de salle
            </div>
          </div>
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="0 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="0 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="2 200 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="1716 €"
            type="number"
          />
          <DatePicker
            className="relative"
            placeholder="27/03/2023"
            allowClear={false}
            bordered={false}
          />
          <Dropdown
            className="relative"
            overlay={
              <Menu>
                {([{ value: "Freelance" }] as any).map(
                  (option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  )
                )}
              </Menu>
            }
            trigger={["hover"]}
          >
            <Button onClick={(e) => e.preventDefault()}>
              {`Freelance `}
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className="absolute top-[217px] left-[17.5px] flex flex-row items-start justify-start gap-[8px]">
          <div className="relative rounded-lg bg-ghostwhite-100 box-border w-40 h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active">
            <div className="absolute top-[calc(50%_-_5px)] left-[17.59px] leading-[130%] font-medium">
              Plongiste
            </div>
          </div>
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="3 157 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="2 204 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="1 700 €"
            type="number"
          />
          <input
            className="font-medium font-plus-jakarta-sans text-sm bg-base-white relative rounded-lg box-border w-[140px] h-11 overflow-hidden shrink-0 border-[1px] border-solid border-foundation-purple-light-active"
            placeholder="1 636 €"
            type="number"
          />
          <DatePicker
            className="relative"
            placeholder="28/09/2023"
            allowClear={false}
            bordered={false}
          />
          <Dropdown
            className="relative"
            overlay={
              <Menu>
                {([{ value: "CDI" }] as any).map(
                  (option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  )
                )}
              </Menu>
            }
            trigger={["hover"]}
          >
            <Button onClick={(e) => e.preventDefault()}>
              {`CDI `}
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <Dropdown
          className="absolute top-[107px] left-[925.5px]"
          overlay={
            <Menu>
              {([{ value: "CDI" }] as any).map((option: any, index: number) => (
                <Menu.Item key={index}>
                  <a onClick={(e) => e.preventDefault()}>
                    {option.value || ""}
                  </a>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["hover"]}
        >
          <Button onClick={(e) => e.preventDefault()}>
            {`CDI `}
            <DownOutlined />
          </Button>
        </Dropdown>
        <button className="cursor-pointer py-2.5 px-4 bg-[transparent] absolute h-[11.4%] w-[24.22%] top-[80.75%] right-[2.2%] bottom-[7.85%] left-[73.58%] rounded-29xl [background:linear-gradient(264.31deg,_#914fd2,_#946cbb)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_6px_23px_-3px_rgba(240,_221,_255,_0.25)_inset] box-border overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-foundation-purple-normal">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined7.png"
          />
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative text-sm leading-[20px] font-semibold font-plus-jakarta-sans text-base-white text-left">
              Ajouter un nouveau salaire
            </div>
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/undefined8.png"
            />
          </div>
        </button>
      </div>
      <div className="absolute top-[107px] left-[201px] rounded-lg bg-ghostwhite-200 w-[140px] h-[60px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_46px)] w-[92px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_32px)] font-medium">
            10,393€
          </div>
          <div className="absolute top-[21px] left-[calc(50%_-_46px)] text-5xs leading-[10px] text-foundation-purple-dark-active inline-block w-[92px]">
            Coût total employeur
          </div>
        </div>
      </div>
      <div className="absolute top-[107px] left-[349px] rounded-lg bg-ghostwhite-200 w-[140px] h-[60px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_46px)] w-[92px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_27px)] font-medium">
            8,974€
          </div>
          <div className="absolute top-[21px] left-[calc(50%_-_46px)] text-5xs leading-[10px] text-foundation-purple-dark-active inline-block w-[92px]">
            Salaire brut
          </div>
        </div>
      </div>
      <div className="absolute top-[107px] left-[497px] rounded-lg bg-ghostwhite-200 w-[140px] h-[60px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_46px)] w-[92px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_27px)] font-medium">
            2,927€
          </div>
          <div className="absolute top-[21px] left-[calc(50%_-_46px)] text-5xs leading-[10px] text-foundation-purple-dark-active inline-block w-[92px]">
            Salaire net
          </div>
        </div>
      </div>
      <div className="absolute top-[107px] left-[645px] rounded-lg bg-ghostwhite-200 w-[140px] h-[60px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_46px)] w-[92px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_28px)] font-medium">
            2,839€
          </div>
          <div className="absolute top-[21px] left-[calc(50%_-_46px)] text-5xs leading-[10px] text-foundation-purple-dark-active inline-block w-[92px]">
            Salaire net après impôts
          </div>
        </div>
      </div>
      <div className="absolute top-[108px] left-[793px] rounded-lg bg-ghostwhite-200 w-72 h-[60px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_46px)] w-[92px] h-[37px]">
          <div className="absolute top-[0px] left-[calc(50%_-_18px)] font-medium">
            25%
          </div>
          <div className="absolute top-[21px] left-[calc(50%_-_46px)] text-5xs leading-[10px] text-foundation-purple-dark-active inline-block w-[92px]">
            Votre masse salariale comparée au CA
          </div>
        </div>
      </div>
      <div className="absolute top-[32px] left-[793px] rounded-48xl bg-lavender w-[308px] h-[53px] overflow-hidden">
        <button className="cursor-pointer py-2.5 px-4 bg-[transparent] absolute h-[73.58%] w-[46.1%] top-[12.26%] right-[50.88%] bottom-[14.15%] left-[3.02%] rounded-30xl [background:linear-gradient(264.31deg,_#914fd2,_#946cbb)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_6px_23px_-3px_rgba(240,_221,_255,_0.25)_inset] box-border overflow-hidden flex flex-row items-center justify-center gap-[5px] border-[1px] border-solid border-foundation-purple-normal">
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined9.png"
          />
          <div className="relative text-sm leading-[20px] font-semibold font-plus-jakarta-sans text-base-white text-left">
            Annuel
          </div>
          <div className="rounded-13xl bg-foundation-purple-light-hover flex flex-row p-[5px] items-center justify-center">
            <div className="relative text-3xs leading-[20px] font-semibold font-plus-jakarta-sans text-foundation-purple-normal-hover text-left">
              X12
            </div>
          </div>
        </button>
        <button
          className="py-2.5 px-4 bg-[transparent] absolute h-[73.58%] w-[46.1%] top-[12.26%] right-[3.02%] bottom-[14.15%] left-[50.88%] rounded-30xl [background:linear-gradient(264.31deg,_#914fd2,_#946cbb)] shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_6px_23px_-3px_rgba(240,_221,_255,_0.25)_inset] box-border overflow-hidden flex flex-row items-center justify-center gap-[5px] opacity-[0.7] border-[1px] border-solid border-foundation-purple-normal"
          disabled={true}
        >
          <img
            className="relative w-5 h-5 overflow-hidden shrink-0 object-cover hidden"
            alt=""
            src="/undefined10.png"
          />
          <div className="relative text-sm leading-[20px] font-semibold font-plus-jakarta-sans text-base-white text-left">
            Mensuel
          </div>
        </button>
      </div>
    </div>
  );
};

export default MSTable;
