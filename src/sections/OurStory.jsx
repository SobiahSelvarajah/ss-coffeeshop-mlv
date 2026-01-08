import OurStoryHeading from "@/components/features/OurStoryHeading";
import AboutUsHeading from "@/components/features/AboutUsHeading";
import AboutUsText from "@/components/features/AboutUsText";
import WhyChooseHeading from "@/components/features/WhyChooseHeading";

export default function OurStory() {
    return (
        <section className="ourStory__container">
            <OurStoryHeading />
            <AboutUsHeading /> 
            <AboutUsText />
            <WhyChooseHeading />
        </section>
    )
}