import Link from "next/link";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import bannerImg from "../assets/image/banner-bg.png";

export default function Banner() {
	return (
		<Container>
			<Row className="align-items-center">
				<Col xs={12} sm={"auto"} md={6}>
					<Row>
						<Col>
							<Fade up delay={100}>
								<h1 className="text-center">Welcome next level cryptocurrency token with faster transfer</h1>
							</Fade>
						</Col>
					</Row>

					<Row>
						<Col>
							<Fade up delay={200}>
								<h5 className="text-secondary text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore
									dolore magna ipsum dolor sit amet consectetur.
								</h5>
							</Fade>
						</Col>
					</Row>

					<Row className="justify-content-center">
						<Fade up delay={300}>
							<Col xs={6} className="ml-0 pl-0 mr-1 pr-1">
								<Link href="/">
									<Button className="" variant="primary" style={{ minWidth: "120px" }}>
										GET TOKEN
									</Button>
								</Link>
							</Col>
							<Col xs={6} className="mr-0 pr-0 ml-1 pl-1">
								<Link href="/test">
									<Button className="btn-outline" variant="default" style={{ minWidth: "120px" }}>
										TEST
									</Button>
								</Link>
							</Col>
						</Fade>
					</Row>
				</Col>

				<Col sm={"auto"} md={6}>
					<Fade in delay={100}>
						<Image fluid src={bannerImg} alt="Banner" />
					</Fade>
				</Col>
			</Row>
		</Container>
	);
}
