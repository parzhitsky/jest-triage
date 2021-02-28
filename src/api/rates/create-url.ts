import { format } from "url";
import { stringify } from "querystring";

/** @private */
// this usually shouldn't be present in the code
// but this is a test project, so I don't mind
const API_KEY = "b9f349888827111f4719";

export default function createUrl(query: string): string {
	if (!query)
		throw new Error("`query` cannot be empty");

	return format({
		protocol: "https",
		hostname: "free.currconv.com",
		pathname: "/api/v7/convert",
		search: stringify({
			q: query,
			compact: "ultra",
			apiKey: API_KEY,
		}),
	});
}
