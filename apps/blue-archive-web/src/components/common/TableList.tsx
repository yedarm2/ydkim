import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { tableColumnStyle, tableRowStyle, tableStyle } from './TableList.css';
import { PropsWithClass } from '@/types/react';
import { classNames } from '@ydkim/browser-utils';

interface TableProps {
	columns: string[];
}

export const TableList = ({
	className,
	columns,
	children,
}: PropsWithClass<PropsWithChildren<TableProps>>) => {
	return (
		<ul className={classNames(tableStyle, className)}>
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
