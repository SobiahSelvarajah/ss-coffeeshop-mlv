import FooterHeading from "./FooterHeading";
import FooterContact from "./FooterContact";
import FooterLocation from "./FooterLocation";
import FooterLinks from "./FooterLinks";

export default function Footer() {
    return (
        <footer className="footer__container">
            <FooterHeading />
            <FooterContact />
            <FooterLocation />
            <FooterLinks />
        </footer>
    )
}