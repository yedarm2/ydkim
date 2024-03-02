import Link from 'next/link';
import { PropsWithChildren } from 'react';
import {
	tableAddLinkRowStyle,
	tableColumnStyle,
	tableGridTemplateColumns,
	tableRowStyle,
	tableStyle,
} from './TableList.css';
import { PropsWithClass } from '@/shared/types';
import { classNames } from '@ydkim/browser-utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { FaPlusCircle } from 'react-icons/fa';

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

interface TableRowProps extends PropsWithChildren, PropsWithClass {
	href?: string;
}

TableList.Row = ({ className, children, href }: TableRowProps) => {
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

interface TableListAddLinkRowProps extends TableRowProps {}

TableList.AddLinkRow = ({ className, children, ...restProps }: TableListAddLinkRowProps) => {
	return (
		<TableList.Row className={classNames(tableAddLinkRowStyle, className)} {...restProps}>
			<TableList.Column>
				<FaPlusCircle className="plus-icon" />
				{children}
			</TableList.Column>
		</TableList.Row>
	);
};
