import React from 'react';

type TextEditorComponent = {
	text: string;
	editable: boolean;
};

const DEFAULT_TEXT = 'hello world\n i am doru\n nice to meet you\n';

export const TextEditorComponent = ({
	text,
	editable,
}: TextEditorComponent) => {
	return (
		<React.Fragment>
			{DEFAULT_TEXT.split('\n').map((line: string, lineNr: number) => (
				<div>
					{lineNr + 1} {line}
				</div>
			))}
		</React.Fragment>
	);
};
