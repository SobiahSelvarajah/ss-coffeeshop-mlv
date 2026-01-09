import Image from "next/image";
import OurStoryHeading from "@/components/features/OurStoryHeading";
import AboutUsHeading from "@/components/features/AboutUsHeading";
import AboutUsText from "@/components/features/AboutUsText";
import OurPassionHeading from "@/components/features/OurPassionHeading";
import OurPassionText from "@/components/features/OurPassionText";
import WhyChooseHeading from "@/components/features/WhyChooseHeading";

export default function OurStory() {
    return (
        <article className="ourStory__container">
            <div className="ourStory__imageContainer">
                <Image
                    src="/images/our-story/coffee-pouring.jpg"
                    className="ourStory__image"
                    alt="coffee pouring"
                    width={500}
                    height={800}
                />
            </div>
            <OurStoryHeading />
            <AboutUsHeading /> 
            <AboutUsText />
            <OurPassionHeading />
            <OurPassionText />
            <WhyChooseHeading />
        </article>
    )
}