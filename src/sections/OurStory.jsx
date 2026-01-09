import Image from "next/image";
import OurStoryHeading from "@/components/features/OurStoryHeading";
import AboutUs from "@/components/features/AboutUs";
import OurPassion from "@/components/features/OurPassion";
import WhyChoose from "@/components/features/WhyChoose";
import FollowUsHeading from "@/components/features/FollowUsHeading";

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
            <div className="ourStory__content">
                <OurStoryHeading />
                <AboutUs />
                <OurPassion />
                <WhyChoose />
                <FollowUsHeading />
            </div>

        </article>
    )
}