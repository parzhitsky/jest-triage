import React from "react";
import { create } from "react-test-renderer";

import Article from "./article";

describe('<Article title="Lorem ipsum" />', () => {
	it('renders "Lorem ipsum" in <h3>', () => {
		const tree = create(
			<Article title="Lorem ipsum" />
		);

		expect(tree.toJSON()).toMatchSnapshot();
	});

	it('renders "Lorem ipsum" in <h3> and "dolor sit amet" in <p>', () => {
		const tree = create(
			<Article title="Lorem ipsum">dolor sit amet</Article>
		);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
