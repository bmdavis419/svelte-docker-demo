export const load = async () => {
	const message = waitThreeSeconds();

	const instaMessage = 'this is instant';

	return { message, instaMessage };
};

async function waitThreeSeconds() {
	return new Promise<string>((resolve) => {
		setTimeout(() => {
			resolve('this is slow');
		}, 3000);
	});
}
