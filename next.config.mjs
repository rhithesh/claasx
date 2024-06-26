/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // <=== enables static exports
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
