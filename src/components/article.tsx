import React from "react";

/** @private */
interface Props {
	title: string;
	children?: React.ReactNode;
}

export default function Article({ title, children }: Props): JSX.Element {
	return (
		<article>
			<header>
				<h3>{title}</h3>
			</header>

			<p>{children}</p>
		</article>
	);
}
