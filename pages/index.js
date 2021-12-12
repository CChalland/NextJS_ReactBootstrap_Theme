import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Privacy from "../components/Privacy";
import WalletSection from "../components/WalletSection";
import FaqSection from "../components/FaqSection";

const IndexPage = () => {
	return (
		<Container>
			<Banner />
			<Features />
			<Privacy />
			{/* <WalletSection /> */}
			<FaqSection />
		</Container>
	);
};

export default IndexPage;
