import {teamMembers} from "../../assets/utils/constants";
import {useState} from "react";

export default function Team() {
    const [toggledMembersInfo, setToggledInfo] = useState<number[]>([]);

    function showMemberInfo(index :number) {
        setToggledInfo(teamIndex => [...teamIndex, index]);
    }

    function hideMemberInfo(index :number) {
        setToggledInfo(teamIndex => teamIndex.filter(memberIndex => memberIndex !== index));
    }
    return (
        <section className="section-spacing">
            <div className="container max-sm:px-0">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Team
                    </h2>
                    <h3 className="section-header-heading">
                        Working together to create digital mindfulness
                    </h3>
                </div>

                <div className="mt-16 md:mt-20">
                    <div className="p-5 md:p-8 bg-[#0f1519]">
                        <div className="flex justify-center md:justify-between">
                            <p className="text-base md:text-lg lg:text-2xl">Concealed Team Meeting</p>
                            <div className="hidden md:flex gap-5 items-center">
                                <p className="text-[#919191]">
                                    13:40h
                                    <span className="bg-[#919191] h-3 w-px inline-block mx-3"></span>
                                    8 people in the call
                                </p>
                                <button className="primary-btn">Join the call</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 md:mt-6">
                            {teamMembers.map((member, index) => {
                                return (
                                    <div key={index} className="relative bg-[#f9f6f1] overflow-hidden aspect-square">
                                        <div><img loading="lazy" src={member.image} alt={member.name}
                                                className="w-full h-full object-cover aspect-square"/></div>
                                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-[rgba(4,11,16,0.64)] to-[rgba(4,11,16,0.17)]"></div>

                                        {Boolean(toggledMembersInfo.includes(index)) && <div
                                            className="absolute bg-[#040B10] opacity-90 top-0 left-0 right-0 bottom-0"></div>}

                                        <div className="absolute top-3 left-2 lg:top-[14px] lg:left-4 text-xs lg:text-base">
                                            <h4 className="font-semibold lg:text-lg">{member.name}</h4>
                                            {Boolean(toggledMembersInfo.includes(index)) && <div>
                                                <p className="">{member.designation}</p>
                                                {Boolean(member.quote.length) && <p className="text-lighter opacity-60 mt-2">{member.quote}</p>}
                                            </div>}

                                        </div>

                                        <div className="absolute top-[10px] right-[10px] lg:top-[20px]  lg:right-[18px] cursor-pointer">
                                            {Boolean(toggledMembersInfo.includes(index)) ?
                                                <svg onClick={() => hideMemberInfo(index)} clipRule="evenodd" fillRule="evenodd" height="20" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" className=""><path d="M10 2.636a7.365 7.365 0 100 14.73 7.365 7.365 0 000-14.73zM1.343 10a8.657 8.657 0 1117.314 0 8.657 8.657 0 01-17.314 0zm6.133-2.527a.646.646 0 01.914 0l1.614 1.613 1.613-1.613a.646.646 0 11.914.914L10.917 10l1.614 1.614a.645.645 0 11-.914.913l-1.613-1.614-1.614 1.614a.646.646 0 01-.914-.913L9.09 10 7.476 8.387a.646.646 0 010-.914z" fill="#fcfcfa"></path></svg>
                                                :
                                                <svg onClick={() => showMemberInfo(index)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path fillRule="evenodd" clipRule="evenodd" d="M10 2.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM1.25 10a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM10 8.75a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0v-4a.75.75 0 01.75-.75zM9.995 6a1 1 0 000 2h.01a1 1 0 100-2h-.01z" fill="currentColor"></path></svg>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex justify-center md:hidden mt-5">
                            <button className="primary-btn">Join the call</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
