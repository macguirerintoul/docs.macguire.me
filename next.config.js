const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
});
import { withPlausibleProxy } from "next-plausible";

module.exports = withPlausibleProxy()(withNextra());
