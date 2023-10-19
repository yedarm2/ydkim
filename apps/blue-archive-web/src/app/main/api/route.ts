// import { NextRequest, NextResponse } from 'next/server';

// export const GET = async (request: NextRequest, params: object) => {
// 	const { searchParams } = new URL(request.url);
// 	const response = await fetch('http://localhost:8000/cache', {
// 		next: {
// 			// revalidate: 10,
// 		},
// 	});

// 	const data = await response.json();
// 	console.log('>>', data, request.headers, params, searchParams);

// 	return NextResponse.json(
// 		{
// 			api: data,
// 			time: new Date().toISOString(),
// 		},
// 		{
// 			headers: {
// 				'Set-Cookie': 'token=token!!',
// 			},
// 		},
// 	);
// };

// export const revalidate = 5;

// https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
	return new ReadableStream({
		async pull(controller) {
			const { value, done } = await iterator.next();

			console.log('value', value);
			if (done) {
				controller.close();
			} else {
				controller.enqueue(value);
			}
		},
	});
}

function sleep(time: number) {
	return new Promise(resolve => {
		setTimeout(resolve, time);
	});
}

const encoder = new TextEncoder();

async function* makeIterator() {
	yield encoder.encode('<p>One</p>');
	await sleep(2000);
	yield encoder.encode('<p>Two</p>');
	await sleep(2000);
	yield encoder.encode('<p>Three</p>');
}

export async function GET() {
	const iterator = makeIterator();
	const stream = iteratorToStream(iterator);

	return new Response(stream);
}
