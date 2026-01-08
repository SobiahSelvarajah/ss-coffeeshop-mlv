import OurStoryHeading from "@/components/features/OurStoryHeading";
import AboutUsHeading from "@/components/features/AboutUsHeading";
import AboutUsText from "@/components/features/AboutUsText";

export default function OurStory() {
    return (
        <section className="ourStory__container">
            <OurStoryHeading />
            <AboutUsHeading /> 
            <AboutUsText />
        </section>
    )
}