import { BsFillPlusCircleFill, BsGrid } from "react-icons/bs";
import { PiListBulletsBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import starLogo from "../../assets/icons/star.svg";
import coinIcon from "../../assets/icons/coin-icon.svg";
import fileIcon from "../../assets/icons/file-icon.svg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import notificationIcon from "../../assets/icons/notification-icon.svg";
import questionMark from "../../assets/icons/question-mark-icon.svg";
import editIcon from "../../assets/icons/edit-icon.svg";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useEffect } from "react";
import {
  deleteBusinessPlanAsync,
  getBusinessPlanAsync,
} from "../../store/businessPlan/businessPlanSlice";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";

const BusinessPlanMenu = () => {
  const dispatch = useAppDispatch();
  const { loading, user } = useAppSelector((state) => state.auth);
  const { businessPlan } = useAppSelector((state) => state.businessPlan);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBusinessPlanAsync());
  }, [dispatch]);

  const handleDeleteBp = (id: string) => {
    Modal.confirm({
      title: "Are you sure you want to delete this business plan?",
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log("delete id ", id);
        dispatch(deleteBusinessPlanAsync(id));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-[16px] min-h-[calc(100%_-_65px)] bg-[#f4edfb] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans ">
      <div className="flex flex-col md:w-[450px] rounded-[16px] py-[16px] bg-white max-h-screen">
        <div className="flex flex-col gap-[10px] text-white mx-[16px] p-[16px] rounded-[8px] mb-[16px] bg-gradient-to-r from-[#6441A5] from-0% to-[#914FD2] to-100%">
          <div className="flex items-center gap-[5px] bg-[#914FD2] w-max py-[5px] px-[8px] rounded-full">
            <div>
              <img src={starLogo} alt="star-logo" className="w-[20px]" />
            </div>
            <div className="text-[10px] text-[#FFD259]">Your Credits</div>
          </div>
          <div className="text-[32px] text-[#f2e8ff]">
            3 <span className="text-[#f2e8ff80]">TTC</span>
          </div>
          <div className="opacity-90 text-[11px]">
            Acheter des nouveaux crédits de modification
          </div>
          <button className="flex justify-center gap-2 text-[14px] px-[30px] py-[15px] bg-white rounded-[8px] text-[#41245E] font-medium">
            <span>Acheter du crédit</span>
            <img src={coinIcon} alt="coin-icon" />
          </button>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-[16px] px-[16px] py-[12px] border-l-2 border-l-[#8347BD] bg-[#cfcfcf1a] hover:cursor-pointer">
            <div className="bg-[#efe5f8] flex items-center justify-center rounded-full w-10 h-10">
              <img src={fileIcon} alt="file-icon" />
            </div>
            <div>
              <div className="text-[#6d3b9e] text-[14px]">
                Mes business plans
              </div>
              <div className="text-[#BDA7D3] text-[12px]">
                Découvrez vos derniers business plans
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[16px] px-[16px] py-[12px] border-l-2 border-l-white hover:border-l-[#8347BD] hover:bg-[#cfcfcf1a] hover:cursor-pointer">
            <div className="opacity-60 bg-[#f4edfb] flex items-center justify-center rounded-full w-10 h-10">
              <img src={coinIcon} alt="coin-icon" />
            </div>
            <div>
              <div className="text-[#6d3b9e] text-[14px]">Mes crédits</div>
              <div className="text-[#BDA7D3] text-[12px]">
                Une modification correspond à un crédit
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[16px] px-[16px] py-[12px] border-l-2 border-l-white hover:border-l-[#8347BD] hover:bg-[#cfcfcf1a] hover:cursor-pointer">
            <div className="opacity-60 bg-[#f4edfb] flex items-center justify-center rounded-full w-10 h-10">
              <img src={downloadIcon} alt="download-icon" />
            </div>
            <div>
              <div className="text-[#6d3b9e] text-[14px]">
                Mes téléchargements
              </div>
              <div className="text-[#BDA7D3] text-[12px]">
                Retrouvez vos derniers téléchargements
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[16px] px-[16px] py-[12px] border-l-2 border-l-white hover:border-l-[#8347BD] hover:bg-[#cfcfcf1a] hover:cursor-pointer">
            <div className="opacity-60 bg-[#f4edfb] flex items-center justify-center rounded-full w-10 h-10">
              <img src={notificationIcon} alt="notification-icon" />
            </div>
            <div>
              <div className="text-[#6d3b9e] text-[14px]">Notifications</div>
              <div className="text-[#BDA7D3] text-[12px]">
                Psssssst... on vous parle !
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-[16px] px-[16px] py-[12px] border-l-2 border-l-white hover:border-l-[#8347BD] hover:bg-[#cfcfcf1a] hover:cursor-pointer">
            <div className="opacity-60 bg-[#f4edfb] flex items-center justify-center rounded-full w-10 h-10">
              <img src={questionMark} alt="question-icon" />
            </div>
            <div>
              <div className="text-[#6d3b9e] text-[14px]">Besoin d’aide ?</div>
              <div className="text-[#BDA7D3] text-[12px]">
                Notre équipe support vous répond rapidement
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-between lg:items-center rounded-[16px] px-[18px] py-[22px] bg-white mb-[22px]">
          <div className="text-[16px] md:text-[18px] lg:text-[26px]">
            Voici vos business-plan,{" "}
            <span className="text-foundation-purple-normal">
              {loading ? ".." : user?.givenName}
            </span>
          </div>
          <button
            onClick={() => navigate("/create-business-plan")}
            className="flex justify-center items-center gap-2 text-[14px] px-[20px] py-[15px] bg-[#914FD2] rounded-[8px] text-white font-medium hover:bg-[#8347bd]"
          >
            <BsFillPlusCircleFill className="text-[20px]" />
            <span>Démarrer un autre business plan</span>
          </button>
        </div>
        <div className="flex justify-end gap-[10px] h-[75px] rounded-[16px] px-[18px] py-[22px] mb-[22px]">
          <div className="flex justify-center items-center gap-2 bg-[#ffffff59] text-[11px] font-medium text-foundation-purple-normal h-10 px-[16px] rounded-[4px]">
            <span>Dernière création</span>
            <IoIosArrowDown size={16} />
          </div>

          <div className="flex justify-center items-center bg-white w-10 h-10 rounded-[4px]">
            <BsGrid
              size={26}
              color="rgba(131, 71, 189, 1)"
              className="opacity-70"
            />
          </div>
          <div className="flex justify-center items-center bg-white w-10 h-10 rounded-[4px]">
            <PiListBulletsBold
              size={28}
              color="rgba(131, 71, 189, 1)"
              className="opacity-70"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
          {/* 1<div className="flex flex-col gap-[14px] rounded-[16px] w-full bg-white p-[12px]">
            <div>
              <div className="bg-[#f4edfb] flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[48px] h-[48px]">
                LB
              </div>
            </div>
            <div className="flex justify-between items-center text-[#5C3C7C]">
              <div className="text-[20px]">Le Bretagne</div>
              <div>
                <img src={editIcon} alt="edit-icon" />
              </div>
            </div>
            <div className="w-full text-[#914FD2] text-[10px] p-[10px] bg-[#FAF5FF] rounded-[4px]">
              3 modifications restantes
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-[14px] rounded-[16px] w-full bg-white p-[12px]">
            <div>
              <div className="bg-[#f4edfb] flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[48px] h-[48px]">
                LF
              </div>
            </div>
            <div className="flex justify-between items-center text-[#5C3C7C]">
              <div className="text-[20px]">Les Flots</div>
              <div>
                <img src={editIcon} alt="edit-icon" />
              </div>
            </div>
            <div className="w-full text-[#914FD2] text-[10px] p-[10px] bg-[#FAF5FF] rounded-[4px]">
              3 modifications restantes
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-[14px] rounded-[16px] w-full bg-white p-[12px]">
            <div>
              <div className="bg-[#f4edfb] flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[48px] h-[48px]">
                LB
              </div>
            </div>
            <div className="flex justify-between items-center text-[#5C3C7C]">
              <div className="text-[20px]">Le Bretagne</div>
              <div>
                <img src={editIcon} alt="edit-icon" />
              </div>
            </div>
            <div className="w-full text-[#914FD2] text-[10px] p-[10px] bg-[#FAF5FF] rounded-[4px]">
              3 modifications restantes
            </div>
          </div> */}
          {businessPlan?.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col gap-[14px] rounded-[16px] w-full bg-white p-[12px]"
            >
              <div>
                <div className="bg-[#f4edfb] flex items-center justify-center rounded-full text-[#874CC8] font-bold text-[16px] w-[48px] h-[48px]">
                  {plan.title.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="flex justify-between items-center text-[#5C3C7C]">
                <div className="text-[20px]">{plan.title}</div>
                <div className="relative flex flex-col-reverse items-center space-y-reverse space-y-2">
                  <AiOutlineDelete
                    size={20}
                    color="#c5b1d8"
                    onClick={() => plan.id && handleDeleteBp(plan.id)}
                    className="absolute top-[-1.75rem] cursor-pointer"
                  />
                  <img src={editIcon} alt="edit-icon" />
                </div>
              </div>
              <div className="w-full text-[#914FD2] text-[10px] p-[10px] bg-[#FAF5FF] rounded-[4px]">
                {plan.revisions} modifications restantes
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessPlanMenu;
