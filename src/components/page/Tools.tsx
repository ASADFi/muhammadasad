import { tools } from "../../assets/utils/constants";
import BoxWrapper from "../common/BoxWrapper";

export default function Tools() {
    return (
        <section className="mt-32">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Tools
                    </h2>
                    <h3 className="section-header-heading max-w-[620px] mx-auto">
                        I use a wide range of tools for Coding
                    </h3>
                </div>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-24">
                    {tools.map((tool, index) => {
                            return <BoxWrapper
                                    title={tool.title}
                                    icon={tool.icon}
                                    key={index} />
                        }
                    )}
                </div>
            </div>
        </section>
    )
}
