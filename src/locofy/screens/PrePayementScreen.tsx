import axios from 'axios'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

type CountryCode = {
    name: string,
    dial_code: string,
    code: string
}

const API_URL = "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json"

const PrePayementScreen = () => {

    const [countries, setCountries] = useState<CountryCode[]>([])
    const [country, setCountry] = useState<CountryCode>()

    const getCountries = async () => {
        try {
            const response = await axios.get(API_URL)
            setCountries(response.data)
        } catch (error: any) {
            console.log(error)
            throw new Error(error.response.data.message)
        }
    }

    const handleChanges = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        const country: CountryCode | undefined = countries.find((country: CountryCode) => country.dial_code === value)
        setCountry(country)
    }

    useEffect(() => {
        getCountries()
    }, [])

    return (
        <div
            className='flex justify-center items-center bg-[#F4EDFB] min-h-[calc(100%_-_65px)] px-[20px] lg:px-[100px] py-[40px] font-plus-jakarta-sans'
            style={{
                backgroundImage: `url(/Layer_1.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
            }}>

            <div className="w-[380px] md:w-[626px] flex flex-col gap-[42px] items-center form-shadow px-[10px] md:px-[60px] py-[25px] md:py-[55px] rounded-[24px] bg-white">
                <div className="text-dark-p text-center text-[28px] sm:text-[32px] lg:text-[40px]">
                    A quelle adresse-mail devons nous vous envoyer les fichiers ?
                </div>
                <div className="flex flex-col justify-center gap-[22px]">
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="full-name" className="text-gray-700 text-[14px]">Nom entier*</label>
                        <input
                            name="full-name"
                            type="text"
                            placeholder="Entrer votre nom"
                            className="block w-[300px] sm:w-[360px] px-[14px] py-[10px] text-gray-700 rounded-[83px] border-[1px] border-gray-300 h-[58px] focus:outline-none text-[14px] focus:ring-2 focus:ring-dark-p"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-[6px]">
                        <label htmlFor="email" className="text-gray-700 text-[14px]">Email*</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Entrez votre adresse mail"
                            className="block w-[300px] sm:w-[360px] px-[14px] py-[10px] text-gray-700 rounded-[83px] border-[1px] border-gray-300 h-[58px] focus:outline-none text-[14px] focus:ring-2 focus:ring-dark-p"
                        />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <label htmlFor="tel" className="text-gray-700 text-[14px]">Numéro de téléphone</label>

                        <div className="flex items-center w-[300px] sm:w-[360px] px-[14px] py-[10px] text-gray-700 rounded-[83px] border-[1px] border-gray-300 h-[58px] focus:outline-none text-[14px] focus:ring-2 focus:ring-dark-p">

                            <div className='flex justify-center items-center overflow-hidden h-[30px] w-[30px] mr-1 rounded-full'>
                                <img
                                    src={`https://hatscripts.github.io/circle-flags/flags/${country?.code ? country?.code.toLowerCase() : 'fr'}.svg`}
                                    alt="flag"
                                    className='object-contain' />
                            </div>

                            <div className='flex items-center h-full w-[26px]'>
                                <select id='countries' name="countries" className='flex h-full w-full outline-none' onChange={handleChanges}>
                                    {
                                        countries.map((country: CountryCode, index: number) => (
                                            <option value={country.dial_code} key={index}>
                                                {country.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='flex h-full w-full'>
                                <input
                                    type="number"
                                    placeholder={country?.dial_code ? country?.dial_code : '+33'}
                                    className='h-full text-center w-[50px] text-gray-700 outline-none disabled:bg-white placeholder-gray-700'
                                    disabled
                                />
                                <input
                                    name="tel"
                                    type="tel"
                                    className='h-full w-full text-gray-700 outline-none'
                                    placeholder=''
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <button className="flex justify-center items-center gap-[10px] w-[300px] sm:w-[360px] h-[58px] border-[1px] border-foundation-purple-normal rounded-[48px] px-[16px] py-[10px] bg-gradient-to-r from-foundation-purple-normal from-0% to-foundation-purple-hover to-100%">
                    <span className="text-white text-[16px]">
                        Get Started
                    </span>
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
                                stroke="#FFF"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </div>

        </div >
    )
}

export default PrePayementScreen