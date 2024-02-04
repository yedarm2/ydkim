import Link from 'next/link';
import { PropsWithChildren } from 'react';
import {
	tableColumnStyle,
	tableGridTemplateColumns,
	tableRowStyle,
	tableStyle,
} from './TableList.css';
import { PropsWithClass } from '@/types/react';
import { classNames } from '@ydkim/browser-utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';

interface TableProps {
	columns: string[];
	ratios: string | number[];
}

export const TableList = ({
	columns,
	ratios,
	className,
	children,
}: PropsWithClass<PropsWithChildren<TableProps>>) => {
	const gridTemplateColumns =
		typeof ratios === 'string' ? ratios : ratios.map(ratio => `${ratio}fr`).join(' ');

	return (
		<ul
			className={classNames(tableStyle, className)}
			style={assignInlineVars({
				[tableGridTemplateColumns]: gridTemplateColumns,
			})}
		>
			<TableList.Row className="head">
				{columns.map(column => (
					<TableList.Column key={column}>{column}</TableList.Column>
				))}
			</TableList.Row>
			{children}
		</ul>
	);
};

interface TableRowProps {
	href?: string;
}

TableList.Row = ({
	className,
	children,
	href,
}: PropsWithClass<PropsWithChildren<TableRowProps>>) => {
	const TagName = href ? Link : 'div';

	return (
		<li className={classNames(tableRowStyle, className)}>
			<TagName className="list-content" href={href as string}>
				{children}
			</TagName>
		</li>
	);
};

TableList.Column = ({ className, children }: PropsWithClass<PropsWithChildren>) => {
	return <div className={classNames(tableColumnStyle, className)}>{children}</div>;
};
