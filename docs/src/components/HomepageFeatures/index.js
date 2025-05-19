import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
	{
		title: "Easy to Use",
		Svg: require("@site/static/img/Logo-Ignition-Check.svg").default,
		Icon: require("@site/static/img/door-enter.svg").default,
		description: (
			<>
				Guide which demonstrates how to create
				custom components for Ignition Perspective, Inductive Automation's
				web-based application platform. Authored by Keith Gamble.
			</>
		),
		link: "https://keith-gamble.github.io/example-perspective-component-module/",
	},
	{
		title: "Focus on What Matters",
		Svg: require("@site/static/img/Logo-Ignition-Check.svg").default,
		Icon: require("@site/static/img/door-enter.svg").default,
		description: (
			<>
				A user guide for the  HMI Components interface
				with process controllers to provide, visualisation and control.
			</>
		),
		link: "/docs/alittlejohns-docs/",
	},
	{
		title: "Powered by React",
		Svg: require("@site/static/img/Logo-Ignition-Check.svg").default,
		Icon: require("@site/static/img/door-enter.svg").default,
		description: (
			<>
				A resource of HMI Component Development Design Patterns and Workflows.
			</>
		),
		link: "docs/development-workflows/",
	},
	{
		title: "Perspective-Client API",
		Svg: require("@site/static/img/Logo-Ignition-Check.svg").default,
		Icon: require("@site/static/img/door-enter.svg").default,
		description: (
			<>
				Documentation for the "Perspective Client API" Node Package.
			</>
		),
		link: "/docs/perspective-client-api/docs/",
	},
];

function Feature({ Svg,Icon, title, description ,link}) {
	return (

		<div className={clsx("col col--4 text--center margin-bottom--lg")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p style={{ textWrap: 'auto', fontSize: 'small' }}>{description}</p>
			</div>
			<div className={styles.buttons}>
				<Link
					className="button button--primary button--lg"
					to={link}>
				<Icon className={styles.featureSvg} role="img" />
				</Link>
			</div>
		</div>

	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
