import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import PlausibleProvider from "next-plausible";

const config: DocsThemeConfig = {
	logo: <span>Macguire's Docs</span>,
	project: {
		link: "https://github.com/macguirerintoul/docs.macguire.me",
	},
	docsRepositoryBase: "https://github.com/macguirerintoul/docs.macguire.me",
	footer: {
		text: "Macguire's docs",
	},
	useNextSeoProps: () => {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s • Macguire's Docs",
			};
		}
	},
	head: (
		<>
			<link
				rel="icon"
				href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>"
			/>
		</>
	),
	main: (props) => (
		<PlausibleProvider
			domain="docs.macguire.me"
			trackOutboundLinks={true}
			customDomain="plausible.macguire.me"
			selfHosted={true}
		>
			{props.children}
		</PlausibleProvider>
	),
	sidebar: { defaultMenuCollapseLevel: 1 },
};

export default config;
