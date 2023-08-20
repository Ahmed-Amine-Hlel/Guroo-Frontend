const AuthScreen = () => {
    return (
        <div
            className='flex md:flex-row flex-col min-h-[calc(100%_-_65px)] font-plus-jakarta-sans'
            style={{
                backgroundImage: `url(/Layer_1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left',
                backgroundSize: 'contain',
            }}
        >

            <div className="flex justify-center items-center p-4 bg-gradient-to-bl from-[#f5effc] from-25% to-transparent to-40% md:w-[55%]">
                <div className="relative p-1 lg:mb-40">
                    <img
                        src="/user-img.png"
                        alt="user-img"
                        className="object-cover w-[440px] h-[300px] rounded-[16px]"
                    />
                    <div className="transition-all ease-in-out duration-400 flex justify-center translate-y-[-50px] px-4 lg:translate-y-0 md:px-0">
                        <div className="lg:absolute lg:bottom-[-60px] lg:right-[-35px] max-w-[340px] p-[20px] bg-[#FAF3FF] rounded-[16px] drop-shadow-2xl custom-shadow text-[14px]">
                            <div className="mb-[15px]">
                                Grâce à Guroo, j’ai pu lancer ma pizzeria à Reims et obtenir un financement par ma banque sans rien connaître en finance
                            </div>
                            <div className="flex justify-between items-center mb-[2px]">
                                <div className="text-[10px] text-[#914FD2]">
                                    — Damien Dubois
                                </div>
                                <div className="flex gap-[1px]">
                                    <img
                                        src="/star.svg"
                                        alt="star"
                                        className="objec-fit w-[12px]"
                                    />
                                    <img
                                        src="/star.svg"
                                        alt="star"
                                        className="objec-fit w-[12px]"
                                    />
                                    <img
                                        src="/star.svg"
                                        alt="star"
                                        className="objec-fit w-[12px]"
                                    />
                                    <img
                                        src="/star.svg"
                                        alt="star"
                                        className="objec-fit w-[12px]"
                                    />
                                    <img
                                        src="/star.svg"
                                        alt="star"
                                        className="objec-fit w-[12px]"
                                    />
                                </div>
                            </div>
                            <div className="text-[10px] text-[#331C4A]">
                                Créateur de PopPizza
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-col justify-between items-center bg-white md:w-[45%]">
                <div></div>
                <div className="transition-all ease-in-out duration-400 py-36 md:py-0 px-10 md:px-5 lg:px-20 xl:px-40 md:mb-30">
                    <div className="text-[#914FD2] text-[26px] md:text-[30px] lg:text-[36px] xl:text-[40px] mb-[12px]">
                        Créez votre business plan dès maintenant !
                    </div>
                    <div className="opacity-50 text-[#41245E] text-[12px] md:text-[14px] xl:text-[16px] mb-[32px]">
                        Réalisé en moins d’une heure montre en main.
                    </div>
                    <div className="mb-[32px]">
                        <button className="w-full px-[16px] py-[10px] rounded-[76px] text-[16px] text-[#344054] shadow-sm border border-[#D0D5DD] flex gap-[12px] justify-center items-center">
                            <img
                                src="/google-icon.svg"
                            />
                            <span>
                                Inscrivez vous avez Google
                            </span>
                        </button>
                    </div>

                    <div className="text-[#475467] text-[14px] text-center">
                        Vous avez déjà un compte <span className="text-[#914FD2]">Connectez-vous</span>
                    </div>
                </div>
                <div className="text-[#475467] text-[12px] lg:text-[14px] flex justify-between itmes-center w-full p-[32px]">
                    <div>
                        Créé pour les entrepreneurs, par des entrepreneurs.
                    </div>
                    <div className="flex items-center gap-1">
                        <img 
                            src="/mail-icon.svg"
                            alt="mail-icon" 
                            className="object-fit w-[16px] pt-[2px]"
                        />
                        <div >
                            aide@guroo.fr
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AuthScreen