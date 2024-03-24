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
			<TableListRow className="head">
				{columns.map(column => (
					<TableListColumn key={column}>{column}</TableListColumn>
				))}
			</TableListRow>
			{children}
		</ul>
	);
};

interface TableRowProps extends PropsWithChildren, PropsWithClass {
	href?: string;
}

const TableListRow = ({ className, children, href }: TableRowProps) => {
	const TagName = href ? Link : 'div';

	return (
		<li className={classNames(tableRowStyle, className)}>
			<TagName className="list-content" href={href as string}>
				{children}
			</TagName>
		</li>
	);
};

const TableListColumn = ({ className, children }: PropsWithClass<PropsWithChildren>) => {
	return <div className={classNames(tableColumnStyle, className)}>{children}</div>;
};

interface TableListAddLinkRowProps extends TableRowProps {}

const TableListAddLinkRow = ({ className, children, ...restProps }: TableListAddLinkRowProps) => {
	return (
		<TableListRow className={classNames(tableAddLinkRowStyle, className)} {...restProps}>
			<TableListColumn>
				<FaPlusCircle className="plus-icon" />
				{children}
			</TableListColumn>
		</TableListRow>
	);
};

TableList.Row = TableListRow;
TableList.Column = TableListColumn;
TableList.ActiveLinkRow = TableListAddLinkRow;
